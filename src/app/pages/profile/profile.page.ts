import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage {

  constructor(private readonly router: Router) { }

  public playThreeInRow(): void {
    this.router.navigateByUrl("/threeInRowMenu")
  }
}
