import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecargosAdicionalesComponent } from './recargos-adicionales.component';

const routes: Routes = [
  {
    path : '',
    component : RecargosAdicionalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecargosAdicionalesRoutingModule { }
