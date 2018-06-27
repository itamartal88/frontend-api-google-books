import { Component, OnInit } from '@angular/core';
import { ValidateService } from './../../services/validate/validate.service';
import { LoginGuard } from './../../guards/login/login.guard';
import { AppService } from './../../services/app/app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public name:string;
  public Email:string;
  public password:string;
  public nameValid:boolean;
  public mailValid:boolean;
  public passwordValid:boolean;
  public loginValid:boolean;
  public nameError:string;
  public mailError:string;
  public passwordError:string;
  constructor(public ValidService:ValidateService,public LoginGuard:LoginGuard,
  public appService:AppService,public router:Router) { }

  ngOnInit() {
    this.appService.validate.subscribe(val => this.loginValid = val);
  }

  checkValid(event){
    if(this.name != undefined && this.Email != undefined && this.password != undefined){ 
    var checkValid = this.ValidService.checkValidition(this.name,this.Email,this.password);
    if(checkValid){
      this.LoginGuard.login = true;
      this.nameValid = false;
      this.passwordValid = false;
      this.mailValid = false;
     }
    }
   this.getSwitchError(event);
   }

   checkRequird(event){
    if(event.target.value.length == 0){
      switch(event.target.id){
        case 'name': 
        this.nameValid = true;
        this.nameError = 'please enter your name';
        break;
        case 'mail': 
        this.mailValid = true;
        this.mailError = 'please enter your mail';
        break;
        case 'password': 
        this.passwordValid = true;
        this.passwordError = 'please enter your password';
        break;
      }
     }
   }

   goToSearchPage(){
    this.router.navigate(['search']);
   }

   getSwitchError(event){
    switch(event.target.id){
      case 'name':
         if(this.name.length < 2){
          this.nameValid = true;
          this.nameError = 'insert least 2 Characters';
         }else{ this.nameValid = false }
          break;
      case 'mail':
          var checkMail = this.ValidService.checkEmail(event.target.value);
          if(checkMail == false){
            this.mailValid = true;
            this.mailError = 'please insert valid mail';
          }else{ this.mailValid = false }
          break;
          case 'password':
          var checkPassword = this.ValidService.checkPassword(event.target.value);
          if(checkPassword != true){
            this.passwordValid = true;
            this.passwordError = 'insert at least 6 Characters of numbers & letters only'
          }else{ this.passwordValid = false}
      default:
         console.log('no excist in case');
    }
   }

}
