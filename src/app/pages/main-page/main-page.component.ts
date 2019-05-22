import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(event: { message: string; action: string }) {
    const { message, action } = event;
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
