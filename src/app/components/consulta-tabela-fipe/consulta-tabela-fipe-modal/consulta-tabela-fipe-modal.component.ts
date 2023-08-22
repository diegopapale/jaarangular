import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Veiculo } from 'src/app/models/veiculo-model';
import { VeiculoService } from 'src/app/services/veiculo-service';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-consulta-tabela-fipe-modal',
  templateUrl: './consulta-tabela-fipe-modal.component.html',
  styleUrls: ['./consulta-tabela-fipe-modal.component.css']
})
export class ConsultaTabelaFipeModalComponent {
  @Input() resultadoConsulta!: Veiculo;

  constructor(public modal: NgbActiveModal, private veiculoService: VeiculoService, private modalService: NgbModal) {}

  incluirVeiculo(){
    this.veiculoService.incluirVeiculo(this.resultadoConsulta).subscribe((res) => {
      if(res) {
        this.openModalSucess();
      }
    });
  }

  private openModalSucess() {
    const modalRef = this.modalService.open(SuccessModalComponent);
    modalRef.componentInstance.errorMessage = "Veiculo incluindo com sucesso";
  }
}
