import { Router } from '@angular/router';
import { defualtImageSrc } from './../../services/consts/allConsts';
import { AppService } from './../../services/app/app.service';
import { SearchDialogComponent } from './../search-dialog/search-dialog.component';
import { HttpService } from './../../services/http/http.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchText:string;
  public booksBySearch = [];
  public name:string;
  public wishListNumber:number;
  constructor(public httpService:HttpService,public dialog:MatDialog,
  public appService:AppService,public router:Router) { }

  ngOnInit() {
    this.appService.name.subscribe(val => this.name = val);
    this.appService.wishListNum.subscribe(val => this.wishListNumber = val);
    this.appService.searchText.subscribe(val => this.searchText = val);
    
    if(this.searchText.length > 1){
      this.httpService.serachBooks(this.searchText).subscribe((res) => {
        this.booksBySearch = res.items;
      },err => console.log(err));
    }
  }

  searchBooks(){
    if(this.searchText.length > 1){ 
    this.appService.changeSearchText(this.searchText); 
    this.httpService.serachBooks(this.searchText).subscribe((res) => {
      this.booksBySearch = res.items;
    },err => console.log(err));
  }
}

getSrc(book){
  if(book.volumeInfo.imageLinks != undefined){
    return book.volumeInfo.imageLinks.smallThumbnail
  }
    return defualtImageSrc;
}

goToWishlist(){
  this.router.navigate(['list']);
}

infoDialog(book){
  if(book.searchInfo != undefined){
   var textSnippet = book.searchInfo.textSnippet
  }else{
     textSnippet = 'no text-Snippet for this book';
  }
 this.dialog.open(SearchDialogComponent, {
    height: '500px',
    width: '300px',
    data: { name: book.volumeInfo.title,img:this.getSrc(book),
    id:book.id,publishDate:book.volumeInfo.publishedDate,
    textSnippet:textSnippet }
  });
}
}
