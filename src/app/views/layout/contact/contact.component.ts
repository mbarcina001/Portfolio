import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrapezoidComponent } from '../../components/trapezoid/trapezoid.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ErrorCampoComponent } from '../../components/errorcampo/error-campo.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    TrapezoidComponent,
    FormsModule,
    ErrorCampoComponent,
    HttpClientModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    
	sectionName = 'Contacto';

  nameText = '';
	mailText = '';
	messageText = '';

	constructor(private http: HttpClient, private toastr: ToastrService) { }

	public send(myForm: NgForm) {
		// tslint:disable-next-line: forin
		for (const i in myForm.controls) {
			myForm.controls[i].updateValueAndValidity();
			myForm.controls[i].markAsTouched();
		}

		if (myForm.valid) {
			const formData: FormData = new FormData();
			formData.append('name', this.nameText);
			formData.append('email', this.mailText);
			formData.append('message', this.messageText);

			const options = this.toastr.toastrConfig;
			options.timeOut = 0;
			options.positionClass = 'toast-bottom-right';

			this.http.post('https://jumprock.co/mail/mbarcina001', formData).subscribe(
				() => {
					this.toastr.show(
						'Click para cerrar',
						'Enviado correctamente',
						options,
						'toast-success'
					);
					this.resetForm(myForm);
				}, () => {
					this.toastr.show(
						'Click para cerrar',
						'Ha ocurrido un error',
						options,
						'toast-error'
					);
				}
			);
		}
	}

	private resetForm(myForm: NgForm) {
		this.nameText = '';
		this.mailText = '';
		this.messageText = '';
		myForm.control.markAsUntouched();
	}
  
}
