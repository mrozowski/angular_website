import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorldService {

  private listenItem = new BehaviorSubject<boolean>(true);
  listenItemOvs$ = this.listenItem.asObservable();

  joinUs: boolean = true;
  constructor() { }

  changeMe(){
   
    this.listenItem.next(!this.listenItem.value);
  }

  

  clickMe(){
    this.joinUs = !this.joinUs;
    
    return console.log("joinUs = " + this.listenItem.value);   
  }
}
