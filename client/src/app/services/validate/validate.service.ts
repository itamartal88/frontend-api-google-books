import { mailRegex,numAndLetterRegex } from './../consts/allConsts';
import { AppService } from './../app/app.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(public AppService:AppService) { }

  checkValidition(name:string,email:string,password:string){
   var a = this.checkEmail(email);
   var b = this.checkPassword(password);
   if(a == true && b == true && name.length > 1){
     this.AppService.changeValidition(true);
     return true;
   }else{
    this.AppService.changeValidition(false);
   }
  }

   checkEmail(mail:string){
    var re = mailRegex;
    return re.test(String(mail).toLowerCase());
  }

   checkPassword(password:string){
   var re = numAndLetterRegex;
   if(re.test(String(password).toLowerCase()) && password.length >= 6){
     return true;
   }
  }

}
