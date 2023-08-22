import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaTabelaFipeComponent } from './components/consulta-tabela-fipe/consulta-tabela-fipe.component';
import { ConsultaVeiculosCadastradosComponent } from './components/consulta-veiculos-cadastrados/consulta-veiculos-cadastrados.component';

const routes: Routes = [
  { path: 'consulta-tabela-fipe', component: ConsultaTabelaFipeComponent },
  { path: 'consulta-veiculos-cadastrados', component: ConsultaVeiculosCadastradosComponent },
  { path: '', redirectTo: '/consulta-tabela-fipe', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
