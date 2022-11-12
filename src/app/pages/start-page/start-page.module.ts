import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { LoginModule } from 'src/app/modules/login';
import { RegistrationModule } from 'src/app/modules/registration';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: StartPageComponent, pathMatch: 'full' }];

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LoginModule, RegistrationModule],
  exports: [StartPageComponent],
})
export class StartPageModule {}
