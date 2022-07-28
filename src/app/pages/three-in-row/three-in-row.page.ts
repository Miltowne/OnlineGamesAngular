import { Component, OnInit } from '@angular/core';
import { ThreeInRowService } from 'src/app/services/three-in-row.service';

@Component({
  selector: 'app-three-in-row',
  templateUrl: './three-in-row.page.html',
  styleUrls: ['./three-in-row.page.css']
})
export class ThreeInRowPage implements OnInit {

  get inSession(): boolean {
    return this.service.inSession
  }

  constructor(private readonly service: ThreeInRowService) { }

  ngOnInit(): void {
    this.service.getSessions()
  }

}
