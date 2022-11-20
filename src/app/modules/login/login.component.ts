import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ForgotPasswordModalService } from './components/forgot-password-modal/services';

@Component({
  selector: 'social-empire-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  @HostBinding('classes') class: string = 'login';

  constructor(public forgotPasswordModal: ForgotPasswordModalService) {}
}
