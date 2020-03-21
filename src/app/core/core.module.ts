import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { languageInitializerFactory } from './initializers/language.initializer';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { APP_CONFIG } from './models/app-config.model';
import { AuthorizationService } from './services/authorization.service';
import { SessionService } from './services/session.service';

const coreModules = [BrowserModule, HttpClientModule];
const coreProviders = [
  SessionService,
  AuthorizationService,
  {
    provide: APP_INITIALIZER,
    useFactory: languageInitializerFactory,
    deps: [TranslateService, APP_CONFIG],
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }
];

@NgModule({
  imports: [...coreModules]
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
        ...coreProviders,
      ]
    };
  }
}
