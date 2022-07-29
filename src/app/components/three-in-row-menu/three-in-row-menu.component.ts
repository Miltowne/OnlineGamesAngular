import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ThreeInRowSession } from 'src/models/three-in-row.game.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-three-in-row-menu',
  templateUrl: './three-in-row-menu.component.html',
  styleUrls: ['./three-in-row-menu.component.css']
})
export class ThreeInRowMenuComponent implements OnInit {

  @Input() sessions?: ThreeInRowSession[]

  get user(): User {
    if (!this.userService.user)
      throw new Error("There must be a user!")

    return this.userService.user 
  }

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {

  }

}
