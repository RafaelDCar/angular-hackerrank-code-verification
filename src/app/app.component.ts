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
          nameOnCard: ['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z]')])],
          cardNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{16}')])],
          expirationMonth: ['', [Validators.required, Validators.pattern(new RegExp('[0-9]{2}'))]],
          expirationYear: ['', [Validators.required, Validators.pattern(new RegExp('[0-1]{4}'))]],
          cvv: ['', [Validators.required, Validators.pattern(new RegExp('[0-1]{3}'))]]
      })
  }
  
  get nameOnCard() {
      return this.paymentForm.get('nameOnCard');
  }
  
  get cardNumber() {
      return this.paymentForm.get('cardNumber');
  }
  
  get expirationMonth() {
      return this.paymentForm.get('expirationMonth');
  }
  
  get expirationYear() {
      return this.paymentForm.get('expirationYear');
  }
  
  get cvv() {
      return this.paymentForm.get('cvv');
  }

  submitForm() {
    /* Change the display message on button click / submit form */
    if(this.paymentForm.valid){
        this.displayMessage = 'Payment Successful'
    }else {
        this.displayMessage = 'Payment Failed!'
    }
  }
}
