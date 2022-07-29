import { Component, Input, OnInit } from '@angular/core';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor() { }

  @Input() sessions?: TIRGameSession[]

  ngOnInit(): void {
  }

}
