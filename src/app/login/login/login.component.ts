import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['crazyphe@outlook.com', Validators.compose([Validators.required, Validators.email, this.validate])],
      password: ['', Validators.required]
    })
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    console.log(JSON.stringify(value));
    console.log(JSON.stringify(valid));
    // this.form.controls['email'].setValidators(this.validate);
  }

  validate(c: FormControl): {[key: string]: any} {
    if (!c.value) {
      return null;
    }
    const pattern = /^c+/;
    if (pattern.test(c.value)) {
      return null;
    }
    return {
      emailNotValid: 'email must start with c'
    }
  }

}
