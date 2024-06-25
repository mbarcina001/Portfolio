import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TrapezoidComponent } from '../../components/trapezoid/trapezoid.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { ErrorCampoComponent } from '../../components/errorcampo/error-campo.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TrapezoidComponent, FormsModule, ErrorCampoComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sectionName = 'Contacto';

  nameText = '';
  mailText = '';
  messageText = '';

  constructor(
    private http: HttpClient,
    @Inject(String)
    private toastr: ToastrService
  ) {}

  public send(myForm: NgForm) {
    // tslint:disable-next-line: forin
    for (const i in myForm.controls) {
      myForm.controls[i].updateValueAndValidity();
      myForm.controls[i].markAsTouched();
    }

    if (myForm.valid) {
      this.sendForm(myForm);
    }
  }

  sendForm(myForm: NgForm) {
    const url = "https://formspree.io/f/xjvnykll";

    //Set Headers
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    const data = `name=${this.nameText}&email=${this.mailText}&message=${this.messageText}`;

    this.http.post(url, data, httpOptions).subscribe({
        next: () => {
          this.toastr.show(
            'Click para cerrar', 'Enviado correctamente',
            this.getToastrOptions(),
            'toast-success'
          );
          this.resetForm(myForm);
        },
        error: error => {
          this.toastr.show(
            'Click para cerrar', 'Ha ocurrido un error: ' + error.message,
            this.getToastrOptions(),
            'toast-error'
          );
        }
    })
  }

  getToastrOptions(): GlobalConfig {
    const options = this.toastr.toastrConfig;
    options.timeOut = 0;
    options.positionClass = 'toast-bottom-right';
    return options;
  }

  private resetForm(myForm: NgForm) {
    this.nameText = '';
    this.mailText = '';
    this.messageText = '';
    myForm.control.markAsUntouched();
  }
}
