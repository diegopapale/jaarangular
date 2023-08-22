import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConsultaVeiculosCadastradosModalComponent } from './consulta-veiculos-cadastrados-modal/consulta-veiculos-cadastrados-modal.component';
import { VeiculoService } from 'src/app/services/veiculo-service';

@Component({
  selector: 'app-consulta-veiculos-cadastrados',
  templateUrl: './consulta-veiculos-cadastrados.component.html',
  styleUrls: ['./consulta-veiculos-cadastrados.component.css']
})
export class ConsultaVeiculosCadastradosComponent {
  placaConsulta: string = '';

  constructor(private modalService: NgbModal, private veiculoService: VeiculoService) {}

  consultarVeiculo() {
    this.veiculoService.consultaVeiculo(this.placaConsulta).subscribe((res) => {
      if(res) {
        const modalRef = this.modalService.open(ConsultaVeiculosCadastradosModalComponent);
        modalRef.componentInstance.resultadoConsulta = { ...res };
      }
    })
  }
}
