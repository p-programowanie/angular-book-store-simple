import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG } from './core/models/app-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) { }
}
