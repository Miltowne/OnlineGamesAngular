import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ThreeInRowGamePage } from './pages/three-in-row-game/three-in-row-game.page';
import { ThreeInRowMenuPage } from './pages/three-in-row-menu/three-in-row-menu.page';
import { SessionListItemComponent } from './components/session-list-item/session-list-item.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { ThreeInRowSessionDisplayComponent } from './components/three-in-row-session-display/three-in-row-session-display.component';
import { ThreeInRowSessionDisplayCellComponent } from './components/three-in-row-session-display-cell/three-in-row-session-display-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ProfilePage,
    LoginFormComponent,
    ThreeInRowMenuPage,
    ThreeInRowGamePage,
    SessionListItemComponent,
    SessionListComponent,
    ThreeInRowSessionDisplayComponent,
    ThreeInRowSessionDisplayCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
