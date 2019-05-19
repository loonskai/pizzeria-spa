import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

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
  checkoutForm: FormGroup;

  /*   nameFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]); */

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      user: new FormGroup({
        name: new FormControl('', [Validators.required]),
        telephone: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      delivery: new FormGroup({
        address: new FormControl('', [Validators.required]),
        flat: new FormControl('', [Validators.required]),
        floor: new FormControl('', [])
      })
      /*       payment: new FormControl('', []),
      comment: new FormControl(''),
      subscription: new FormControl('') */
    });
  }

  submitOrder() {
    console.dir(this.checkoutForm);
    console.log('submit order!');
  }
}
