import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { CheckoutPageComponent } from '../../pages/checkout-page/checkout-page.component';
import { CheckoutFormComponent } from '../../components/checkout-form/checkout-form.component';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [CheckoutPageComponent, CheckoutFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class CheckoutModule {}
