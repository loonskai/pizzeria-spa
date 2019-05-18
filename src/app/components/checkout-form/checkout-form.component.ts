import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
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
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  ngOnInit() {}
}
