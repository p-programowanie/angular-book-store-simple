import { InjectionToken } from '@angular/core';

export interface AppConfig {
  production: boolean;
  supportedLanguages: string[];
  defaultLanguage: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('AppConfig');
