import { Component, OnInit } from '@angular/core';
import { ThreeInRowService } from 'src/app/services/three-in-row.service';
import { UserService } from 'src/app/services/user.service';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';

@Component({
  selector: 'app-three-in-row',
  templateUrl: './three-in-row.page.html',
  styleUrls: ['./three-in-row.page.css']
})
export class ThreeInRowPage implements OnInit {

  get inSession(): boolean {
    return this.service.inSession
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
