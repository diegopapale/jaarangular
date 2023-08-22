import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VeiculoService } from 'src/app/services/veiculo-service';
import { SuccessModalComponent } from '../../success-modal/success-modal.component';

@Component({
  selector: 'app-consulta-veiculos-cadastrados-modal',
  templateUrl: './consulta-veiculos-cadastrados-modal.component.html',
  styleUrls: ['./consulta-veiculos-cadastrados-modal.component.css']
})
export class ConsultaVeiculosCadastradosModalComponent {
  @Input() resultadoConsulta: any;
  @Input() editMode: boolean = true;

  constructor(public modal: NgbActiveModal, private modalService: NgbModal, private veiculoService: VeiculoService) {}

  atualizarVeiculo() {
    this.veiculoService.atualizarVeiculo(this.resultadoConsulta).subscribe((res) => {
      if(res) {
        this.openModalSucess();
      }
    })
  }

  private openModalSucess() {
    const modalRef = this.modalService.open(SuccessModalComponent);
    modalRef.componentInstance.errorMessage = "Veiculo atualizado com sucesso";
  }
}
