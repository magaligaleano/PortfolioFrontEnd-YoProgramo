import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSessionComponent } from './components/iniciar-session/iniciar-session.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-session', component:IniciarSessionComponent},
  {path:'', redirectTo:'iniciar-session', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
