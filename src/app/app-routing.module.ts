import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { JoinGamePage } from "./pages/join-game/join-game.page";
import { LoginPage } from "./pages/login/login.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage
    },
    {
        path: "",
        component: JoinGamePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}