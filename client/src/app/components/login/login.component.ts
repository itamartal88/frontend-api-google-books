import { mailRegex,numAndLetterRegex } from './../../services/consts/allConsts';
import { LoginGuard } from './../../guards/login/login.guard';
import { Router } from '@angular/router';
import { ValidateService } from './../../services/validate/validate.service';
import { AppService } from './../../services/app/app.service';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MyErrorStateMatcher } from './../../services/errorState/errorStateMatch';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponentnauaj implements OnInit {
public validate:boolean;
public email:string;
public name:string;
public password:string;
public header:string = 'Login Page';
public emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
  Validators.pattern(mailRegex)
]);
public passworFormdControl = new FormControl('', [
  Validators.required,
  Validators.minLength(6),
  Validators.pattern(numAndLetterRegex)
]);
public nameFormControl = new FormControl('', [
  Validators.required,
  Validators.minLength(2),
]);
public emailMatcher = new MyErrorStateMatcher();
public passwordMatcher = new MyErrorStateMatcher();
public nameMatcher = new MyErrorStateMatcher();

  constructor(public appService:AppService,public validService:ValidateService,
  public router:Router,public loginguard:LoginGuard
  ) {}
    
  ngOnInit() {
   this.appService.validate.subscribe(val => this.validate = val);
  }

  checkValid(){
   if(this.name != undefined && this.email != undefined && this.password != undefined){ 
   var checkValid = this.validService.checkValidition(this.name,this.email,this.password);
   if(checkValid){
     this.loginguard.login = true;
    }
   }
  }
  
  goToSearchPage(){
   this.router.navigate(['search']);
  }

}
