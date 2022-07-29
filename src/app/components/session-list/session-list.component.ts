import { Component, Input, OnInit } from '@angular/core';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  constructor() { }

  @Input() sessions?: ThreeInRowSession[]

  ngOnInit(): void {
  }

}
