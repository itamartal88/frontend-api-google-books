import { AppService } from './../../services/app/app.service';
import { LoginGuard } from './../../guards/login/login.guard';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public router:Router,public loginGuard:LoginGuard,
  public appService:AppService) { }

  ngOnInit() {
  }

  goToSearchPage(){
    this.router.navigate(['search'])
  }

  goToListPage(){
    this.router.navigate(['list'])
  }

  goToLoginPage(){
    this.appService.changeWishList([]);
    this.loginGuard.login = false;
    this.appService.changeValidition(false);
    this.appService.changeSearchText('');
    this.router.navigate(['login'])
  }
}
