import { Component, Input, OnInit, Output } from '@angular/core';
import { ThreeInRowService } from 'src/app/services/three-in-row.service';
import { UserService } from 'src/app/services/user.service';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-three-in-row-menu',
  templateUrl: './three-in-row-menu.page.html',
  styleUrls: ['./three-in-row-menu.page.css']
})
export class ThreeInRowMenuPage {

  public session?: ThreeInRowSession

  get user(): User {
    if (!this.userService.user)
      throw new Error("User required")
      
    return this.userService.user
  }

  get gameSessions(): ThreeInRowSession [] {
    if (!this.userService.user)
      throw new Error("There must be a user!")

    return this.service.getPlayerSessions(this.userService.user.username)
  }

  constructor(private readonly service: ThreeInRowService, private readonly userService: UserService) { }

  ngOnInit(): void {
    this.service.getAllSessions()
  }
}
