import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  constructor() { }

  public counter:number = 0;

  increaseBy(amount: number):void {
    this.counter+=amount;
  }

  resetCounter():void {
    this.counter = 10;
  }
}
