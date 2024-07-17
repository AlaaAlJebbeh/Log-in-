import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)': 'onLog()'
  }
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  constructor() { }

  onLog(){
    console.log('Clicked');
    console.log(this.elementRef.nativeElement);

  }

}
