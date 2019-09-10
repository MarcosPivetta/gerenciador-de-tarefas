import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ListarTarefasComponent } from './listar';
import { TarefaService } from './shared';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
