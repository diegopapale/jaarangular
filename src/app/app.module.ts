import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaTabelaFipeComponent } from './components/consulta-tabela-fipe/consulta-tabela-fipe.component';
import { ConsultaTabelaFipeModalComponent } from './components/consulta-tabela-fipe/consulta-tabela-fipe-modal/consulta-tabela-fipe-modal.component';
import { ConsultaVeiculosCadastradosComponent } from './components/consulta-veiculos-cadastrados/consulta-veiculos-cadastrados.component';
import { ConsultaVeiculosCadastradosModalComponent } from './components/consulta-veiculos-cadastrados/consulta-veiculos-cadastrados-modal/consulta-veiculos-cadastrados-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VeiculoService } from './services/veiculo-service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaTabelaFipeComponent,
    ConsultaTabelaFipeModalComponent,
    ConsultaVeiculosCadastradosComponent,
    ConsultaVeiculosCadastradosModalComponent,
    ErrorModalComponent,
    SuccessModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbAlertModule
  ],
  providers: [VeiculoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
