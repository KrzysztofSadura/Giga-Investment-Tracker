import { APP_ROUTES } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
	PreloadAllModules,
	provideRouter,
	withDebugTracing,
	withPreloading,
} from '@angular/router';

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(
			APP_ROUTES,
			withPreloading(PreloadAllModules),
			withDebugTracing()
		),
		provideAnimations(),
	],
});
