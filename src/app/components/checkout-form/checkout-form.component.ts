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

import { RegExpValues } from '../../enums';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.sass']
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm = this.fb.group({
    user: this.fb.group({
      name: ['Vasya', [Validators.required, Validators.minLength(2)]],
      telephone: [
        '9369992',
        [
          Validators.required,
          Validators.pattern(RegExpValues.phone),
          Validators.minLength(7)
        ]
      ],
      email: ['user@mail.com', [Validators.required, Validators.email]]
    }),
    delivery: this.fb.group({
      address: ['Pushkina', [Validators.required, Validators.minLength(4)]],
      flat: [
        '5',
        [Validators.required, Validators.pattern(RegExpValues.number)]
      ],
      floor: [
        '1',
        [Validators.required, Validators.pattern(RegExpValues.number)]
      ]
    }),
    payment: ['cash'],
    comment: [''],
    subscriptionSms: ['true'],
    subscriptionEmail: ['true']
  });

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  submitOrder() {
    console.dir(this.checkoutForm.value);
    this.checkoutForm.reset();
    this.router.navigateByUrl('/');
  }
}
