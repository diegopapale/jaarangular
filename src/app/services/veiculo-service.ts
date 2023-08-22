import { Veiculo } from './../models/veiculo-model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ErrorModalComponent } from "../components/error-modal/error-modal.component";

@Injectable({
  providedIn: 'root',
})

export class VeiculoService {

  constructor(private http: HttpClient, private modalService: NgbModal) {}

  public consultaVeiculo(placa: string): Observable<Veiculo> {
    const options = {
      params: new HttpParams().set("placa", placa)
    };

    return this.http.get<Veiculo>('http://localhost:52000/api/getVeiculo', options)
      .pipe(
        catchError(error => {
          this.openErrorModal('Erro ao consultar veículo. Verifique a placa.');
          return throwError('Erro ao consultar veículo. Verifique a placa.');
        })
      );
  }

  public consultaTabelaFipe(codigoFipe: string): Observable<any> {
    return this.http.get<any>(`https://brasilapi.com.br/api/fipe/preco/v1/${codigoFipe}`)
      .pipe(
        catchError(error => {
          this.openErrorModal('Erro ao consultar tabela FIPE. Verifique o código FIPE.');
          return throwError('Erro ao consultar tabela FIPE. Verifique o código FIPE.');
        })
      );
  }

  public incluirVeiculo(veiculo: Veiculo): Observable<any> {
    return this.http.post<any>('http://localhost:52000/api/incluirVeiculo', veiculo)
    .pipe(
      catchError(error => {
        this.openErrorModal("Erro ao incluir veiculo na base de dados");
        return throwError("Error ao incluir veiculo na base de dados");
      })
    );
  }

  public atualizarVeiculo(veiculo: Veiculo): Observable<any> {
    return this.http.put<any>('http://localhost:52000/api/atualizarVeiculo', veiculo)
    .pipe(
      catchError(error => {
        this.openErrorModal("Erro ao atualizar veiculo na base de dados");
        return throwError("Error ao atualizar veiculo na base de dados");
      })
    );
  }



  private openErrorModal(errorMessage: string) {
    const modalRef = this.modalService.open(ErrorModalComponent);
    modalRef.componentInstance.errorMessage = errorMessage;
  }

}
