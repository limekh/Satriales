import { ApplicationRef, Injectable } from '@angular/core';
import { HighContrastModeDetector } from '@angular/cdk/a11y';

@Injectable({providedIn: 'root'})
export class HighContrastModeDetectorFix extends HighContrastModeDetector {
  constructor(appRef: ApplicationRef) {
    super(appRef, document);
  }
}