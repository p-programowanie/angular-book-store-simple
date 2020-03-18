import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from '../app.routes';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// all modules with forRoot static method
const forRootModues = [
  RouterModule.forRoot(routes),
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: translateLoaderFactory,
      deps: [HttpClient]
    }
  })
];

@NgModule({})
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
        forRootModues.map(e => e.providers) // retrive all forRoot providers
      ]
    };
  }
}
