import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  log(message: any) {
    console.log(message);
  }
}
