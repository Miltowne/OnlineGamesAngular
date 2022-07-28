import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from "./pages/profile/profile.page";
import { LoginPage } from "./pages/login/login.page";
import { ThreeInRowPage } from "./pages/three-in-row/three-in-row.page";

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
        path: "threeInRow",
        component: ThreeInRowPage
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