import {Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {MenuComponent} from "../menu/menu.component";
import {ContactComponent} from "../contact/contact.component";
import {AboutComponent} from "../about/about.component";

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
]