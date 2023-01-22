import { ChangeDetectionStrategy, Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { ForgotPasswordModalService } from './components/forgot-password-modal/services';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'social-empire-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @HostBinding('classes') class: string = 'login';

  public loginForm: FormGroup;

  constructor(public forgotPasswordModal: ForgotPasswordModalService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  // TODO: Написать логику для данной функции
  public submitLogin(): void {
    if (this.loginForm.valid) {
      console.log('Form: ', this.loginForm);

      const formData = { ...this.loginForm.value };
      console.log('Form Data: ', formData);
    }
  }
}
