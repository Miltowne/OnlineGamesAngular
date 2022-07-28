import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { ProfilePage } from './pages/profile/profile.page';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ThreeInRowComponent } from './components/three-in-row/three-in-row.component';
import { ThreeInRowPage } from './pages/three-in-row/three-in-row.page';
import { ThreeInRowMenuComponent } from './components/three-in-row-menu/three-in-row-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    ProfilePage,
    LoginFormComponent,
    ThreeInRowComponent,
    ThreeInRowPage,
    ThreeInRowMenuComponent
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
