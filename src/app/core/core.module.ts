import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from '../app.routes';
import { languageInitializerFactory } from './initializers/language.initializer';
import { APP_CONFIG } from './models/app-config.model';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// providers of all modules with forRoot static method
const forRootModues = [
  RouterModule.forRoot(routes).providers,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: translateLoaderFactory,
      deps: [HttpClient]
    }
  }).providers
];

@NgModule({
  imports: [BrowserModule, HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error('Core module imported multiple times');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        forRootModues,
        {
          provide: APP_INITIALIZER,
          useFactory: languageInitializerFactory,
          deps: [TranslateService, APP_CONFIG],
          multi: true
        }
      ]
    };
  }
}
