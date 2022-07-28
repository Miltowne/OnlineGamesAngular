import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/models/user.model';

const userAPI = environment.userAPI
const APIkey = environment.apiKey

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "x-api-key": APIkey
})

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public login(username: string): Observable<User>{
    return this.checkUserName(username)
    .pipe(
      switchMap((user: User | undefined) =>{
        if(user === undefined){
          return this.createUser(username)
        }
        return of(user)
      }),
      )
  }

  public checkUserName(username: string): Observable<User | undefined>{
    return this.http.get<User[]>(`${userAPI}?username=${username}`)
    .pipe(
      map((response: User[])=> response.pop())
    )
  }

  private createUser(username: string): Observable<User>{
    const user = {
      username,
    };
    return this.http.post<User>(userAPI, user, {
      headers
    })
    
  }
}
  