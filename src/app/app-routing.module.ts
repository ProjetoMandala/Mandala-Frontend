import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import{MenuComponent} from './menu/menu.component';

import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'menu', component:MenuComponent},

  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'entrar', component: EntrarComponent},

  {path: 'inicio', component: InicioComponent},

  {path: 'sobre', component: SobreNosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
