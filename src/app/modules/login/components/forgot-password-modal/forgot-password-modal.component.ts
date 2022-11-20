import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { ForgotPasswordModalService } from './services';

@Component({
  selector: 'social-empire-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForgotPasswordModalComponent {
  @HostBinding('classes') class: string = 'forgot-password-modal';

  constructor(public forgotPasswordModal: ForgotPasswordModalService) {}
}
