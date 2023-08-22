import { Component, ViewChild } from '@angular/core';
import { NgbAlert, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaTabelaFipeModalComponent } from './consulta-tabela-fipe-modal/consulta-tabela-fipe-modal.component';
import { Veiculo } from 'src/app/models/veiculo-model';
import { VeiculoService } from 'src/app/services/veiculo-service';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-consulta-tabela-fipe',
  templateUrl: './consulta-tabela-fipe.component.html',
  styleUrls: ['./consulta-tabela-fipe.component.css']
})
export class ConsultaTabelaFipeComponent {
  codigoFipe: string = '';
  ano: number = 2;
  veiculo?: Veiculo;

  constructor(
    private veiculoService: VeiculoService,
    private modalService: NgbModal) {}

    consultar() {
      debugger;
      this.veiculoService.consultaTabelaFipe(this.codigoFipe).subscribe(
        (res) => {
          if (res) {
            const veiculos: Veiculo[] = res;
            this.veiculo = veiculos.find(x => x.anoModelo == this.ano);
            if(this.veiculo) this.openModal();
            else {
              this.openModalError();
            }
          }
        },
      );
    }

    private openModal() {
      const modalRef = this.modalService.open(ConsultaTabelaFipeModalComponent);
      modalRef.componentInstance.resultadoConsulta = this.veiculo;
    }

    private openModalError() {
      const modalRef = this.modalService.open(ErrorModalComponent);
      modalRef.componentInstance.errorMessage = "Ano modelo não encontrado";
    }
  }
