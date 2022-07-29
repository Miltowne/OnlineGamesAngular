import { Component, OnInit } from '@angular/core';
import { ThreeInRowGameService } from 'src/app/services/three-in-row-game.service';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';

@Component({
  selector: 'app-three-in-row-game',
  templateUrl: './three-in-row-game.page.html',
  styleUrls: ['./three-in-row-game.page.css']
})
export class ThreeInRowGamePage implements OnInit {

  constructor(
    private readonly gameService: ThreeInRowGameService
    ) {}

  ngOnInit(): void {
      this.gameService.session = {
        sessId: history.state.sessId,
        players: history.state.players,
        state: history.state.state,
        turn: history.state.turn
      }      
  }
}
