import { InjectionToken } from '@angular/core';

export interface AppConfig {
  production: boolean;
  supportedLanguages: string[];
  defaultLanguage: string;
  tryDetectBrowserLanguage: boolean;
  apiPath: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');
