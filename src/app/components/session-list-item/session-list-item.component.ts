import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TIRGameSession } from 'src/models/three-in-row-game-session.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-session-list-item',
  templateUrl: './session-list-item.component.html',
  styleUrls: ['./session-list-item.component.css']
})
export class SessionListItemComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  get user(): User {
    if(!this.userService.user)
      throw new Error("SessionListItemComponent: No user")
    return this.userService.user
  }

  enterSession(session: string): void{
    console.log(`threeInRowGame?${session}`);
    
    this.router.navigateByUrl(`threeInRowGame?${session}`)
  }

  @Input() session?: TIRGameSession

  ngOnInit(): void {
  }

}
