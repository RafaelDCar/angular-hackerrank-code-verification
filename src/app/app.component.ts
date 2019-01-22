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
          name: ['', Validators.(new RegExp('[A-Za-z]'))],
          cardNumber: ['', [Validators.minLength(16), Validators.maxLength(16)]],
          expirationMonth: ['', [Validators.minLength(2), Validators.maxLength(2)]],
          expirationYear: ['', [Validators.minLength(4), Validators.maxLength(4)]],
          cvv: ['', [Validators.minLength(3), Validators.maxLength(3)]]
      })
  }
  
  get name(): FormControl {
      return this.paymentForm.get('name');
  }
  
  get cardNumber(): FormControl {
      return this.paymentForm.get('cardNumber');
  }
  
  get expirationMonth(): FormControl {
      return this.paymentForm.get('expirationMonth');
  }
  
  get expirationYear(): FormControl {
      return this.paymentForm.get('expirationYear');
  }
  
  get cvv(): FormControl {
      return this.paymentForm.get('cvv');
  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
