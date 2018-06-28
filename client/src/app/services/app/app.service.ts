import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public validate = new BehaviorSubject<boolean>(false);
  public wishListArray = new BehaviorSubject<any[]>([]);
  public searchText = new BehaviorSubject<string>('');
  public name = new BehaviorSubject<string>('');
  public wishListNum = new BehaviorSubject<number>(0);
  constructor() { }

  cahngeVisitorName(val:string){
    this.name.next(val);
  }

  changeValidition(val:boolean){
    this.validate.next(val);
  }

  changeWishList(val:any){
    this.wishListArray.next(val);
  }

  changeSearchText(val:string){
    this.searchText.next(val);
  }

  changeListNumber(val:number){
    this.wishListNum.next(val);
  }
}



