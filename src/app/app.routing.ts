import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AccountComponent } from './module/account/account/account.component';
import { ClientComponent } from './module/client/client/client.component';
import { CreateAccountComponent } from './module/create-account/create-account/create-account.component';

export const appRoutes: Routes = [

   { path: 'Account', component: CreateAccountComponent },
   //{path: 'account/:id', component : AccountComponent},
   { path: '', redirectTo: 'Account', pathMatch: 'full' }  ,
//   { path: 'Client', component: ClientComponent }
];
