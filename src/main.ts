import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { APP_CONFIG } from './app/core/models/app-config.model';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

fetch(environment.configurationFile)
  .then(res => res.json())
  .then(config => {
    platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config }])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
