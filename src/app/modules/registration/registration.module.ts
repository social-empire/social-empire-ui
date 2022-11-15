import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RegistrationComponent,
  },
];

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
