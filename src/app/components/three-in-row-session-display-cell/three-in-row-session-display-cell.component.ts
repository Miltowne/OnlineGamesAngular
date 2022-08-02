import { Component, Input, OnInit } from '@angular/core';
import { ThreeInRowGameService } from 'src/app/services/three-in-row-game.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-three-in-row-session-display-cell',
  templateUrl: './three-in-row-session-display-cell.component.html',
  styleUrls: ['./three-in-row-session-display-cell.component.css']
})
export class ThreeInRowSessionDisplayCellComponent {
  @Input() char?: string
  @Input() i?: number
  
  get character() : string {
    if (!this.char || this.char === "E") 
      return ""
    
      return this.char
  }

  playerMove(){
    console.log(this.char)
    console.log(this.i);
    const playerName = this.userService.user?.username
    if(this.char != "E") {
      console.log("char är inte E");
      
      return // if the player move is't on a empty field
    }
    if(this.threeInRowService.session.turn === playerName){
      console.log("det är min tur");
      
      this.threeInRowService.playerMove(this.i!)
    }

    
  }
  
  constructor(
    private readonly userService: UserService,
    private readonly threeInRowService: ThreeInRowGameService
  ) { }
}
