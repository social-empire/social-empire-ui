import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForgotPasswordModalService {
  showDialog: boolean = false;

  constructor() {}
}
