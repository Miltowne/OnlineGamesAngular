import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-in-row-session-display-cell',
  templateUrl: './three-in-row-session-display-cell.component.html',
  styleUrls: ['./three-in-row-session-display-cell.component.css']
})
export class ThreeInRowSessionDisplayCellComponent {
  @Input() char?: string
  
  // output on click

  get character() : string {
    if (!this.char || this.char === "E") 
      return ""
    
      return this.char
  }
  
  constructor() { }
}
