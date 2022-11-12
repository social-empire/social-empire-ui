import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MetaDefinition } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IPage } from './../../shared/models/page';

@Component({
  selector: 'social-empire-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartPageComponent implements IPage, OnInit, OnDestroy {
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

  constructor(private readonly router: Router, private readonly _cdf: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkUrl();
  }

  ngOnDestroy(): void {
    this._cdf.markForCheck();
  }

  checkUrl() {
    const routeUrl = this.router.url;
    return routeUrl;
  }
}
