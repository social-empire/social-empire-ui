import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { ForgotPasswordModalService } from 'src/app/modules/login/components/forgot-password-modal/services';
import { IPage } from './../../shared/models/page';

@Component({
  selector: 'social-empire-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent implements IPage {
  title = 'Стартовая страница';
  header = 'Начальная страница';
  description = 'Приветственная страница для пользователя';
  ogDescription?: string;
  image?: string;
  robots?: string;
  meta?: MetaDefinition[];
  tags?: string | string[];
  cssModules?: string[];
  documents?: any[];

  constructor(public readonly forgotPasswordModal: ForgotPasswordModalService) {}
}
