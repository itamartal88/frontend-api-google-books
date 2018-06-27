
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MetirialModule } from './services/material/material';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';
//components
import { AppComponent } from './app.component';
//import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';
//services
import { AppService } from './services/app/app.service';
import { HttpService } from './services/http/http.service';
import { ValidateService } from './services/validate/validate.service';
import { LoginGuard } from './guards/login/login.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
  /*  LoginComponent,*/
    SearchComponent,
    TopBarComponent,
    WishListComponent,
    SearchDialogComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MetirialModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      /*{path: 'login', component: LoginComponent },*/
      {path: 'loginpage', component: LoginPageComponent },
      {path: 'list', component: WishListComponent,canActivate:[LoginGuard] },
      {path: 'search', component: SearchComponent,canActivate:[LoginGuard] },
    ]),
  ],
  entryComponents: [SearchDialogComponent],
  exports:[],
  providers: [HttpService,AppService,ValidateService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

