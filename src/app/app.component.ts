import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;

  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */
    this.creatForm();

  }
  
  creatForm() {
      this.paymentForm = this.formBuilder.group({
          name: ['', Validators.required],
          cardNumber: ['', [Validators.required, Validators.maxLength(16)]],
          expirationMonth: ['', [Validators.required, Validators.maxLength(2)]],
          expirationYear: ['', [Validators.required, Validators.maxLength(4)]],
          cvv: ['', [Validators.required, Validators.maxLength(3)]]
      })
  }
  
  get name

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
