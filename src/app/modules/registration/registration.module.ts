import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule, RouterModule],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}
