import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, FormsModule, ValidationErrors } from '@angular/forms';

type ErrorMessageFunction = (params?: ValidationErrors) => string;

@Component({
  selector: 'app-error-campo',
  templateUrl: './error-campo.component.html',
  styleUrls: ['./error-campo.component.scss'],
  standalone: true,
  imports: [
	FormsModule,
	CommonModule
  ]
})

export class ErrorCampoComponent {

	private static readonly errorMessages: Record<string, ErrorMessageFunction> = {
		'required': () => 'Este campo es obligatorio',
		'pattern': () => 'El mail introducido no es válido',
		'minlength': (params?: ValidationErrors) => 'Longitud de campo incorrecta. Mínimo: ' + params?.['requiredLength'],
		'maxlength': (params?: ValidationErrors) => 'Longitud de campo incorrecta. Máximo: ' + params?.['requiredLength'],
		'onlyNumbers': (params?: ValidationErrors) => params?.['message']
	};

	@Input()
	control!: AbstractControlDirective | AbstractControl;

	constructor() {}

	shouldShowErrors(): boolean {
		return !!this.control?.errors && !!this.control?.touched;
	}

	/* Salta una vez por cada error de cada campo */
	listOfErrors(): string[] {
		if (!this.control?.errors) {
			return [];
		}

		return Object.keys(this.control.errors)
			.map(field => this.getMessage(field, this.control.errors?.[field]));
	}
 
	private getMessage(type: string, params: ValidationErrors ) {
		const key = type as keyof Record<string, ErrorMessageFunction>;
		return ErrorCampoComponent.errorMessages[key](params);
	}

}
