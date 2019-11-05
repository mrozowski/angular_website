import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('moveMe', [
      state('init', style({
        transform: 'translateX(0)'
      })),
      state('clicked', style({
        //transform: 'translateX(10rem) scale(0.9, 0.9)',
        
      })),
      transition('init => clicked', [
        animate('1s ease', style({
          transform: 'scale(0.8,0.8)'
        })),
        animate('2s ease', style({
          transform: 'translateX(20rem) scale(0.8,0.8)',
          opacity: 0.4
        }))
      ]),
      transition('clicked => init', [
        animate('1s')
      ]),
    ]),  
  ],
})


export class AppComponent {
  is_clicked = false;

  toggle(){
    this.is_clicked = !this.is_clicked;
  }
}
