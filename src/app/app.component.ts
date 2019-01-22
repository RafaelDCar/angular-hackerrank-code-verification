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
          name: ['', Validators.pattern(new RegExp('[A-Za-z]'))],
          cardNumber: ['', Validators.pattern(new RegExp('[0-1]{16}'))],
          expirationMonth: ['', Validators.pattern(new RegExp('[0-1]{2}'))],
          expirationYear: ['', ],
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
