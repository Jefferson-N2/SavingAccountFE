import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from '../account/account/account.component';
import { BalanceComponent } from '../balance/balance/balance.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
   {
      path: 'Client',
      component: ClientComponent,
   },
   {
      path: 'Client/client/account/:id',
      component: AccountComponent,
   },
   {
      path: 'Client/client/balance/:id',
      component: BalanceComponent,
   }



];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class ClientRoutingModule { }
