import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AlertsComponent } from './alerts/alerts.component';
import { InfraComponent } from './infra/infra.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
{ path: 'dashboard', component: DashboardComponent },
{path:'transaction',component: TransactionComponent},
{path:'alerts',component: AlertsComponent},
{path:'infra',component: InfraComponent},
{path:'support',component: SupportComponent},
{ path: '**', redirectTo: 'dashboard' }]
;

@NgModule({
  declarations: [ 
    DashboardComponent,
    AlertsComponent,
    InfraComponent,
    SupportComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
