import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() intervalFire = new EventEmitter<number>();

  intervale;

  count = 0;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.intervale = setInterval(() => {
      this.intervalFire.emit(this.count + 1);
      this.count++;
    }, 1000);
  }
  stopGame() {
    clearInterval(this.intervale);
  }
}
