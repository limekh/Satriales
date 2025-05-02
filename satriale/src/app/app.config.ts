import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { HighContrastModeDetector } from '@angular/cdk/a11y';
import { HighContrastModeDetectorFix } from './high-contrast-fix';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    { provide: HighContrastModeDetector, useClass: HighContrastModeDetectorFix }
  ]
};
