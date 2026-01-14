import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ScrollService } from './app/services/scroll.service';
import { inject } from '@angular/core';

// Bootstrap the application
bootstrapApplication(AppComponent, appConfig)
  .then(appRef => {
    // Initialize scroll service after app is bootstrapped
    const scrollService = appRef.injector.get(ScrollService);
    scrollService.init();
  })
  .catch((err) => console.error(err));