import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  paymentForm: FormGroup;
  displayMessage: string;

  constructor(private formBuilder: FormBuilder) {

    /* Declare Reactive Form Group here */
    

  }
  
  ngOnInit() {
      this.creatForm();
  }
  
  creatForm() {
      
  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
