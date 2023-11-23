/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routConfig from './app/routes';

import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routConfig)
    ]
  }
).catch(err => console.error(err));