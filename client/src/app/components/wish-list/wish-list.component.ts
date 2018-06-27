import { AppService } from './../../services/app/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  public wishListBooks:any = [];
  public header:string = 'Your Wish-List';
  constructor(public appService:AppService) { }

  ngOnInit() {
    this.appService.wishListArray.subscribe(val => this.wishListBooks = val);
  }

  deleteFromWishList(book){
    var con =  confirm("You sure you want to delete it from list?");
    if(con == true){
      var numInArray = this.wishListBooks.map(function(e) { return e.id; }).indexOf(book.id);
      this.wishListBooks.splice(numInArray,1);
      this.appService.changeWishList(this.wishListBooks);
    }
  }
}
