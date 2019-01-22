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
          expirationMonth: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{2}')])],
          expirationYear: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{4}')])],
          cvv: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{3}')])]
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
    this.paymentForm.controls['nameOnCard'].setValue("Mathew Jerome");
    this.paymentForm.controls['cardNumber'].setValue("3456234567854567");
    this.paymentForm.controls['expirationMonth'].setValue("11");
    this.paymentForm.controls['expirationYear'].setValue("2017");
    this.paymentForm.controls['cvv'].setValue("677");
    /* Change the display message on button click / submit form */
    console.log(this.paymentForm.valid);
    if(this.paymentForm.valid){
        this.displayMessage = 'Payment Successful!'
    } else {
        this.displayMessage = 'Payment Failed!'
    }
  }
}
