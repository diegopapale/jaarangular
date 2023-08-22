import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
})
export class ErrorModalComponent {
  @Input() errorMessage = 'Ocorreu um erro.';

  constructor(public activeModal: NgbActiveModal) {}
}
