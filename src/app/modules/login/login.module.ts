import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [LoginComponent],
})
export class LoginModule {}
