import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingModule } from './module/shared/loading/loading.module';

const routes: Routes = [];

@NgModule({
  imports: [   
    LoadingModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
