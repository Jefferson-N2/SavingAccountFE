import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountModule } from './account.module';
import { AccountComponent } from './account/account.component';
import { BalanceComponent } from '../balance/balance/balance.component';
debugger
const routes: Routes = [
   {
      path: '',
      component: AccountComponent,
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
export class AccountRoutingModule { }
