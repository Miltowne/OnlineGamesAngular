import { Component, OnInit } from '@angular/core';
import { ThreeInRowGameService } from 'src/app/services/three-in-row-game.service';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';

@Component({
  selector: 'app-three-in-row-game',
  templateUrl: './three-in-row-game.page.html',
  styleUrls: ['./three-in-row-game.page.css']
})
export class ThreeInRowGamePage implements OnInit {

  get gameSession(): TIRGameSession {
    if (!this.gameService.session) 
      throw("no session!")

    return this.gameService.session
  }

  constructor(
    private readonly gameService: ThreeInRowGameService
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
  }
}
