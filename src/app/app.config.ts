import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ApiModule } from '../openapi/generated-resources/api.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(ApiModule.forRoot({ rootUrl: 'http://localhost:8080' })),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(),
  ]
};
