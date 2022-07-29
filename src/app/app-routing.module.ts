import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from "./pages/profile/profile.page";
import { LoginPage } from "./pages/login/login.page";
import { ThreeInRowMenuPage } from "./pages/three-in-row-menu/three-in-row-menu.page";
import { ThreeInRowGamePage } from "./pages/three-in-row/three-in-row-game.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage
    },
    {
        path: "profile",
        component: ProfilePage
    },
    {
        path: "threeInRowMenu",
        component: ThreeInRowMenuPage
    },
    {
        path: "threeInRowGame",
        component: ThreeInRowGamePage
    },
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