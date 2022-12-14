import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
  }

  loginSubmit(loginFom: NgForm): void{
    const {username} = loginFom.value

    this.loginService.login(username)
    .subscribe({
      next: (user: User) => {
        this.userService.user = user
        this.login.emit();
      }
    })
  }

}
