import { AppService } from './../../services/app/app.service';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.css']
})
export class SearchDialogComponent implements OnInit {
  public validate:boolean = true;
  public wishArray:any;
  constructor( 
    public dialogRef: MatDialogRef<SearchDialogComponent>,
    public appService:AppService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.wishArray = this.appService.wishListArray;
    var checkInArray = this.wishArray._value.map(function(e) { return e.id; }).indexOf(this.data.id);
    if(checkInArray > -1){
      this.validate = false;
    }
  }

  close(){
    this.dialogRef.close();
  }

  addToWishList(book){
  this.wishArray._value.push(this.data);
  this.appService.changeWishList(this.wishArray._value);
  this.appService.changeListNumber(this.wishArray._value.length);
  this.dialogRef.close();
  }

}
