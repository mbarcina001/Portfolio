import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService, GlobalConfig } from 'ngx-toastr';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
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

			let options: GlobalConfig;
			options = this.toastr.toastrConfig;
			options.timeOut = 0;
			options.positionClass = 'toast-bottom-right';

			this.http.post('https://jumprock.co/mail/mbarcina001', formData).subscribe(
				(resp) => {
					this.toastr.show(
						'Click para cerrar',
						'Enviado correctamente',
						options,
						'toast-success'
					);
					this.resetForm(myForm);
				}, (err) => {
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
