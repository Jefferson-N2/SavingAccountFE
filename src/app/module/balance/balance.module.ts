import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceComponent } from './balance/balance.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoaderService } from 'src/app/services/loader.service';



@NgModule({
  declarations: [
    BalanceComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ], exports:[BalanceComponent]
})
export class BalanceModule { }
