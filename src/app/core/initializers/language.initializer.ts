import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from './../models/app-config.model';

export function languageInitializerFactory(
  translateService: TranslateService,
  appConfig: AppConfig
) {
  return () => {
    return new Promise((resolve, reject) => {
      translateService.addLangs(appConfig.supportedLanguages);

      const browserLang = navigator?.language?.toLowerCase();
      const isBrowserLangSupported = new RegExp(appConfig.supportedLanguages
        .join('|'))
        .test(browserLang);

      const langToSet =
        (appConfig.tryDetectBrowserLanguage && isBrowserLangSupported)
          ? browserLang
          : appConfig.defaultLanguage;

      translateService.use(langToSet)
        .toPromise()
        .then(_ => resolve())
        .catch(error => reject(error));
    });
  };
}
