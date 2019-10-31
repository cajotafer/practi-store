import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailInput: FormControl;

  constructor() {
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.emailInput.valueChanges
      .subscribe(value => console.log(value) /** You can do something with the value */);
  }

  ngOnInit() {
  }

  registerMail() {
    if (this.emailInput.valid) { console.log(this.emailInput.value); }
  }

  getErrorMessage() {
    return this.emailInput.hasError('required') ? 'You must enter a value' :
      this.emailInput.hasError('email') ? 'Not a valid email' :
        '';
  }

}
