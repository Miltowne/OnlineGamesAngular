import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';

const apiTIR = environment.tirAPI

@Injectable({
  providedIn: 'root'
})
export class ThreeInRowService {
  private _sessions: ThreeInRowSession[] = []
  private _session?: ThreeInRowSession 

  get sessions(): ThreeInRowSession[] {
    return this._sessions
  }

  get inSession(): boolean {
    return !!this._session 
  }

  getPlayerSessions(playerName: string) : ThreeInRowSession[] {
    return this._sessions.filter((session) => {
      return session.players.includes(playerName)
    })
  }

  constructor(private http: HttpClient) {}

  public getAllSessions(): void {
    this.http.get(apiTIR)
      .subscribe({
        next: (sessions: any) => {
          const allSessions = [...sessions].map((session) => {  
            const state = session.state.split(" ")  
            const stateArr = [] 

            for (let i = 0; i < state.length; i += 3) {
              stateArr.push(state.slice(i, i + 3))
            }

            return {
              sessId: session.session,
              players: session.players.split(" "),
              state: stateArr,
              turn: session.turn
            }
          })

          this._sessions = allSessions
        },
        error: (err: Error) => {
          console.log(err.message)
        }
      })
  }
}