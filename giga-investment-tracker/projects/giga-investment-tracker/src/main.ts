import { provideHttpClient } from '@angular/common/http';
import { RequestService } from './app/data/request.service';
import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NoPreloading, provideRouter, withPreloading } from '@angular/router';

bootstrapApplication(AppComponent, {
	providers: [
		{ provide: RequestService, useClass: RequestService },
		provideHttpClient(),
		provideRouter(APP_ROUTES, withPreloading(NoPreloading)),
		provideAnimations(),
	],
});
