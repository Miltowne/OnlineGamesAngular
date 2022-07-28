import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.utils';

const apiTIR = environment.tirAPI

@Injectable({
  providedIn: 'root'
})
export class ThreeInRowService {
  private _sessions: ThreeInRowSession[] = []
  private _session?: ThreeInRowSession

  public get sessions(): ThreeInRowSession[] {
    return this.sessions
  }

  public get inSession(): boolean {
    return this._session !== null
  }

  constructor(private http: HttpClient) {}

  public getSessions(): void {
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
          StorageUtil.storageSave<ThreeInRowSession[]>(StorageKeys.TIRSession, this._sessions)  
        },
        error: (err: Error) => {
          console.log(err.message)
        }
      })
  }
}