import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  OddNumbers = [];
  EvenNumbers = [];
  intervalFire(counter: number) {
    if (counter % 2 === 0) {
      this.EvenNumbers.push(counter);
    } else {
      this.OddNumbers.push(counter);
    }
  }
}
