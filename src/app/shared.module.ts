import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainButtonComponent } from './components/main-button/main-button.component';

@NgModule({
  declarations: [MainButtonComponent],
  exports: [MainButtonComponent],
  imports: [CommonModule]
})
export class SharedModule {}
