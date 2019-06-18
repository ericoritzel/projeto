import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard} from './guards/auth.guard'
import { TemplateComponent } from './template/template.component';

const routes: Routes = [

  // App routes goes here here
  { 
    path: 'sistema',  
    component:TemplateComponent,  
    canActivate: [AuthGuard], 
    children: [
      { path: 'cliente', component: ClienteComponent},
      { path: 'produto', component: ProdutoComponent},
      
    ]
  },  

  { path: 'login', component: LoginComponent},
  { path: '', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
