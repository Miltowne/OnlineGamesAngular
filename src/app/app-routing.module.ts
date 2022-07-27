import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProfilePage } from "./pages/profile/profile.page";
import { LoginPage } from "./pages/login/login.page";

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