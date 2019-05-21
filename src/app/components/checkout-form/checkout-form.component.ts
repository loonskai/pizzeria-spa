import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { RegExpValues } from '../../enums';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.sass']
})
export class CheckoutFormComponent implements OnInit {
  // @ViewChild('checkoutForm') checkoutForm: NgForm;
  checkoutForm = this.fb.group({
    user: this.fb.group({
      name: ['', Validators.required, Validators.minLength(2)],
      telephone: [
        '',
        Validators.required,
        Validators.pattern(RegExpValues.phone)
      ],
      email: ['', Validators.required, Validators.email]
    }),
    delivery: this.fb.group({
      address: ['', Validators.required, Validators.minLength(4)],
      flat: ['', Validators.required, Validators.pattern(RegExpValues.number)],
      floor: ['', Validators.required, Validators.pattern(RegExpValues.number)]
    }),
    payment: [''],
    comment: [''],
    subscription: ['']
  });

  /*   nameFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]); */

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  submitOrder() {
    console.dir(this.checkoutForm);
    console.log('submit order!');
  }
}
