import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appSubmitted]'
})
export class SubmittedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'green';
    console.log('calling submitted directive');
  }

}
