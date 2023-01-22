import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { HeaderModule } from 'src/app/modules/header';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, HeaderModule],
  exports: [AboutUsComponent],
})
export class AboutUsModule {}

