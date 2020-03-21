import { InjectionToken } from '@angular/core';

export interface AppConfig {
  production: boolean;
  supportedLanguages: string[];
  defaultLanguage: string;
  tryDetectBrowserLanguage: boolean;
  authApi: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');
