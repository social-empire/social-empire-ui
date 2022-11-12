import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration';
import { StartPageComponent } from './pages/start-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start-page',
    pathMatch: 'full',
  },
  {
    path: 'start-page',
    component: StartPageComponent,
    children: [
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
