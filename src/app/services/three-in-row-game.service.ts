import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';
import { StorageKeys } from '../enums/storage-keys.enum';
import { StorageUtil } from '../utils/storage.utils';

@Injectable({
  providedIn: 'root'
})
export class ThreeInRowGameService {

  constructor(
    private readonly router: Router
  ) { }

  private _session?: ThreeInRowSession

  set session(sess: ThreeInRowSession){
      StorageUtil.storageSave<ThreeInRowSession>(StorageKeys.TIRSession, sess)
    this._session = sess
  }

  get session(): ThreeInRowSession{
    if(!this._session){
      let sess = StorageUtil.storageRead<ThreeInRowSession>(StorageKeys.TIRSession)
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
