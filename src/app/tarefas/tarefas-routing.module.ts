import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { Routes } from '@angular/router';

import { ListarTarefasComponent } from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefasComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  }
];
