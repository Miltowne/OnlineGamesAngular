import { Component, Input, OnInit } from '@angular/core';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';

@Component({
  selector: 'app-three-in-row-session-display',
  templateUrl: './three-in-row-session-display.component.html',
  styleUrls: ['./three-in-row-session-display.component.css']
})
export class ThreeInRowSessionDisplayComponent {
  @Input() session?: TIRGameSession

  constructor() { }

  makeMove(row: number, column: number): void {

  }
}
