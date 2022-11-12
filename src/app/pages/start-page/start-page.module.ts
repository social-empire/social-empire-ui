import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { LoginModule } from 'src/app/modules/login';
import { RegistrationModule } from 'src/app/modules/registration';

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, LoginModule, RegistrationModule],
  exports: [StartPageComponent],
})
export class StartPageModule {}
