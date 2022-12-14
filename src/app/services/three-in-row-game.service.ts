import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.utils';
import { UserService } from './user.service';

const headers = new HttpHeaders({
  "Content-Type": "application/json"
})
const {tirAPI} = environment
@Injectable({
  providedIn: 'root'
})

export class ThreeInRowGameService {
  
  constructor(
    private readonly router: Router,
    private readonly http: HttpClient,
    private readonly userService: UserService
    ) { }
    

  private _session?: TIRGameSession

  set session(sess: TIRGameSession){
      StorageUtil.storageSave<TIRGameSession>(StorageKeys.TIRSession, sess)
    this._session = sess
  }

  get session(): TIRGameSession{
    if(!this._session){
      let sess = StorageUtil.storageRead<TIRGameSession>(StorageKeys.TIRSession)
      if(sess){
        this._session = sess
      }
      else {
        this.router.navigateByUrl('/threeInRowMenu')
      }
    }
      
    return this._session!
  }

  playerMove(index: number): void{
    // change session.turn to the other player
    if(this.session.turn === this.session.players[0])
      this.session.turn = this.session.players[1]
    else this.session.turn = this.session.players[0]
    
    // change session.state
    let playerCharacter = (this._session?.players[0] === this.userService.user?.username) ? "X" : "O" 
    
    const sessionState = this._session!.state
    sessionState[index] = playerCharacter

    const session = {
      ...this.session,
      state: sessionState
    }
    
    this.session = session
    
    this.http.put(`${tirAPI}/session/${session.sessId}`, {
      headers,
      data: {
        session: session.sessId,
        players: session.players.reduce((prev, curr) => prev + " " + curr),
        state: session.state.reduce((prev, curr) => prev + " " + curr),
        turn: session.turn
      }
    }).subscribe()
  }

}
