import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { AccountModule } from './module/account/account.module';
import { LoadingModule } from './module/shared/loading/loading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientRoutingModule } from './module/client/client.routing.module';
import { CreateAccountModule } from './module/create-account/create-account.module';
import { BalanceModule } from './module/balance/balance.module';
import { NavigationModule } from './module/shared/navigation/navigation.module';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
    AccountModule,
    BalanceModule,
    HttpClientModule,
    NavigationModule,
    ClientRoutingModule,
    CreateAccountModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
