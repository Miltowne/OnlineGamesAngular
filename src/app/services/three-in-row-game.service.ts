import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root'
})
export class ThreeInRowGameService {

  constructor(
    private readonly router: Router
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

}
