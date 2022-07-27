import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGamePage } from './join-game.page';

describe('JoinGamePage', () => {
  let component: JoinGamePage;
  let fixture: ComponentFixture<JoinGamePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinGamePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
