import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { NavigationModule } from '../shared/navigation/navigation.module';
import { ClientModule } from '../client/client.module';
import { BalanceModule } from '../balance/balance.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    BalanceModule,
    RouterModule
    
  ],
  exports:[
    
  ]
  
})
export class AccountModule { }
