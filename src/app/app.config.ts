import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInput } from '@ngx-formly/bootstrap/input';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    importProvidersFrom([
      FormlyModule.forRoot({
        types: [{ name: 'input', component: FormlyFieldInput }],
        validationMessages: [{ name: 'required', message: 'Este campo es obligatorio' }],
      }),
    ]),
  ],
};
