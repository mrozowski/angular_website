import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { WorldService } from './world.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})


export class AppComponent {
 
  subscription:Subscription;

  constructor(private world: WorldService,
    private rout: Router){}

  ngOnInit(){
      this.subscription =  this.world.listenItemOvs$
      .subscribe((item) => {
        //if item is false route to next page (module) regions
        //add animation and delay
         setTimeout(() => {
           if(item == false) this.goToRegions();    
         }, 2000);
        
      });
      

    
  }

 

  letsGo(){
    this.world.listenItemOvs$.subscribe((value) => { 
      console.log(value);
      if (true === value) {
          console.log("tak");
      } else {
          console.log("nie");
      }
   });
  }
  goToRegions(){
    this.rout.navigate(['/regions']);
  }
 
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
