import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Store, select } from '@ngrx/store';

import { OrderItem } from '../../interfaces';
import { ClearCart } from 'src/app/actions/cart.actions';
import { RegExpValues } from '../../enums';

export class CheckoutErrorStateMatcher implements ErrorStateMatcher {
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
export class CheckoutFormComponent {
  checkoutForm = this.fb.group({
    user: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      telephone: [
        '',
        [
          Validators.required,
          Validators.pattern(RegExpValues.phone),
          Validators.minLength(7)
        ]
      ],
      email: ['', [Validators.required, Validators.email]]
    }),
    delivery: this.fb.group({
      address: ['', [Validators.required, Validators.minLength(4)]],
      flat: [
        '',
        [Validators.required, Validators.pattern(RegExpValues.number)]
      ],
      floor: [
        '',
        [Validators.required, Validators.pattern(RegExpValues.number)]
      ]
    }),
    payment: ['cash'],
    comment: [''],
    subscriptionSms: ['true'],
    subscriptionEmail: ['true']
  });
  orderData: OrderItem[];

  matcher = new CheckoutErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<{ cart: OrderItem[] }>
  ) {
    this.store
      .pipe(select((state: { cart: OrderItem[] }) => state.cart))
      .subscribe(cart => {
        this.orderData = cart;
      });
  }

  submitOrder() {
    console.log('order data: ', this.orderData);
    console.log('user data: ', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.store.dispatch(new ClearCart());
    this.router.navigateByUrl('/');
  }
}
