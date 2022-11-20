import { MetaDefinition } from '@angular/platform-browser';

/**
 * Interface for pages
 *
 * @export
 * @interface IPage
 */

export interface IPage {
  title: string;
  header: string;
  description?: string;
  ogDescription?: string;
  image?: string;
  robots?: string;
  meta?: MetaDefinition[];
  tags?: string | string[];
  cssModules?: string[];
  documents?: any[];
}
