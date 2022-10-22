import { NgModule } from '@angular/core';
import { CreateAccountComponent } from './create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { appRoutes } from 'src/app/app.routing';
import { AccountModule } from '../account/account.module';
import { LoadingModule } from '../shared/loading/loading.module';
import { BalanceModule } from '../balance/balance.module';



@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    BalanceModule,
    AccountModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
  ],
})
export class CreateAccountModule { }
