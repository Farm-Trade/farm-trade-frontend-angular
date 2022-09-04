import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from "./views/teams/screen/table/teams.component";
import {PlayerComponent} from "./views/players/components/table/player.component";

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'players', component : PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
