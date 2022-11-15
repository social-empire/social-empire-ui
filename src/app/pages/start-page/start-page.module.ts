import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartPageComponent } from './start-page.component';
import { LoginModule } from 'src/app/modules/login';
import { RegistrationModule } from 'src/app/modules/registration';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'start-page',
    component: StartPageComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../modules/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'registration',
        loadChildren: () => import('../../modules/registration/registration.module').then((m) => m.RegistrationModule),
      },
    ],
  },
];

@NgModule({
  declarations: [StartPageComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), LoginModule, RegistrationModule],
  exports: [StartPageComponent],
})
export class StartPageModule {}
