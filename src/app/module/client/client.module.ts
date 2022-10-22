import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client.routing.module';
import { AccountModule } from '../account/account.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ClientComponent
    
  ],
  imports: [
    CommonModule,
    AccountModule,
    ClientRoutingModule,
    RouterModule
    
  ],
  providers:[ClientRoutingModule],
  exports:[ClientRoutingModule]
})
export class ClientModule { }
