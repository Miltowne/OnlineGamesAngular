import { Component, OnInit } from '@angular/core';
import { ThreeInRowGameService } from 'src/app/services/three-in-row-game.service';
import { UserService } from 'src/app/services/user.service';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';

@Component({
  selector: 'app-three-in-row-game',
  templateUrl: './three-in-row-game.page.html',
  styleUrls: ['./three-in-row-game.page.css']
})
export class ThreeInRowGamePage implements OnInit {

  gameOver = false
  winningPlayer = ""

  get gameSession(): TIRGameSession {
    if (!this.gameService.session) 
      throw("no session!")

    return this.gameService.session
  }

  constructor(
    private readonly gameService: ThreeInRowGameService,
    private readonly userService: UserService
    ) {}

  ngOnInit(): void {
    if (!history.state.state)
      return 

    this.gameService.session = {
      sessId: history.state.sessId,
      players: history.state.players,
      state: history.state.state,
      turn: history.state.turn
    }     
    if(this.isWinning(this.gameService.session.state)  === "X"){
      this.gameOver = true
      this.winningPlayer = this.gameService.session.players[0]
    } 
    else if(this.isWinning(this.gameService.session.state)  === "O"){
      this.gameOver = true
      this.winningPlayer = this.gameService.session.players[1]
    }
  }
  threeInRow(arr: string[]): string{
    if(arr.length != 9) throw new Error("The Board must be at least 9 rows")

    if(this.isWinning(arr) != "false"){
        return this.isWinning(arr)
    }
    return "No winner"

}

playerMove(){
  
}

isWinning(arr: string[]): string{
    const isTrue: boolean = true
    switch (isTrue) {
        case arr[0] === arr[3] && arr[3] === arr[6] && arr[0] != "E": // lodrätt
            return arr[0]
        case arr[1] === arr[4] && arr[4] === arr[7] && arr[1] != "E":
            return arr[1]
        case arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != "E":
            return arr[2]
        case arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != "E": // vågrätt
            return arr[0]
        case arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != "E":
            return arr[3]
        case arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != "E":
            return arr[6]
        case arr[0] === arr[4] && arr[4] === arr[8] && arr[0] != "E": // cross win
            return arr[0]
        case arr[2] === arr[4] && arr[4] === arr[6] && arr[2] != "E":
            return arr[2]
        default:
            return "false"
    }

}
}
