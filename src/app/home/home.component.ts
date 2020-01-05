import { Component, OnInit, HostListener } from '@angular/core';
import { WorldService } from '../world.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  animation,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,  
       
      })),
      state('hide', style({
        opacity: 0.8,
        transform: 'translateX(-100%)',
           
      })),

      
    ]),  
    
    trigger('scrollAnimation_one_main', [
      state('show', style({
        opacity: 1,   
        transform: 'translateY(0)'      
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(5em)'       
      })),

      transition('hide => show', animate('700ms ease-in')),
      transition('show => hide', animate('700ms ease-out'))
    ]), 

    trigger('scrollAnimation_one', [
      state('show', style({
        opacity: 1      
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-10em)'       
      })),

      transition('hide => show', animate('700ms ease-in')),
      transition('show => hide', animate('700ms ease-out'))
    ]), 

    trigger('scrollAnimation_two', [
      state('show', style({
        opacity: 1      
      })),
      state('hide', style({
        opacity: 0     
      })),

      transition('hide => show', animate('700ms ease-in')),
      transition('show => hide', animate('700ms ease-out'))
    ]),

    trigger('scrollAnimation_three', [
      state('show', style({
        opacity: 1      
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(10em)'     
      })),

      transition('hide => show', animate('700ms ease-in')),
      transition('show => hide', animate('700ms ease-out'))
    ]),

    trigger('scrollAnimation_icon_one', [
      state('show', style({
        transform: 'rotateY(0)'     
      })),
      state('hide', style({
        transform: 'rotateY(360deg)'      
      })),

      transition('hide => show', animate('1000ms ease-in')),
      transition('show => hide', animate('1000ms ease-out'))
    ]),

    trigger('scrollAnimation_icon_two', [
      state('show', style({
        transform: 'rotateY(0)'     
      })),
      state('hide', style({
        transform: 'rotateY(360deg)'      
      })),

      transition('hide => show', animate('1000ms 0.5s ease-in')),
      transition('show => hide', animate('1000ms ease-out'))
    ]),

    trigger('scrollAnimation_icon_three', [
      state('show', style({
        transform: 'rotateY(0)'     
      })),
      state('hide', style({
        transform: 'rotateY(360deg)'      
      })),

      transition('hide => show', animate('1000ms 1s ease-in')),
      transition('show => hide', animate('1000ms ease-out'))
    ]),
  ],
})
export class HomeComponent implements OnInit {
  //for animation
  state = 'hide'; //button Join us
  state_one = 'hide'
  state2 = 'hide'; //first Section's items
  state_icon_one = 'hide'  //icon second section
  
  constructor(private world: WorldService) { }
  
  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      
    const scrollPosition = window.pageYOffset; //positoin of scroll 
    const windowHeight = window.innerHeight;   //height of the window

    //getter for position of HTML element
    function offset(el) {
      var rect = el.getBoundingClientRect();     
      return rect.top;
    }

    //boolean function for checking if HTML element visible on the page window
    function elementOnScreen(el){
      if((windowHeight) > offset(el))
        return true;
      else
       return false;
    }

  
    console.log(windowHeight.valueOf() + scrollPosition.valueOf());
    
    var element = document.querySelector('#join_us');
    
    if (elementOnScreen(element)) {
      this.state = 'show';   
    }

    var element = document.querySelector('.anim_icon');
    if (elementOnScreen(element)) {
      this.state_icon_one = 'show';
    }

    element = document.querySelector('.anim_one');
    if (elementOnScreen(element)) {
      
      
      this.first_section_anim();
      
    }

   }

 private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

private async first_section_anim()
{
  this.state_one = 'show';
  await this.delay(700)
  this.state2 = 'show';
  
}

  isOpen: boolean = false; 
  ngOnInit() {
  }

  clickMe(){
    this.isOpen = !this.isOpen;
    this.world.clickMe();
    this.world.changeMe();
  }


  overOn(event){ 
    event.target.classList.add('newClass');
    event.target.classList.remove('glowbox');
   
  }
  overOff(event){
    event.target.classList.remove('newClass');
    event.target.classList.add('glowbox');
   
  }
}
