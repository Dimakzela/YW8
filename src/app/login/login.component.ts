import {Component, OnInit} from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage : string;

  constructor(private router : Router,private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
     });
    }

    onSubmit()  : void {
      if (this.loginForm.invalid) {
        this.errorMessage="Fields are invalid";
        return;
      }
      else{
        this.router.navigate(['course-overview']);
      }
  }
}
