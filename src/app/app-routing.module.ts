import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamsComponent} from "./views/teams/screen/table/teams.component";
import {PlayerComponent} from "./views/players/components/table/player.component";
import {TeamUpdateComponent} from "./views/teams/screen/form/team-update.component";
import {TeamResolver} from "./views/teams/resolvers/team.resolver";

const routes: Routes = [
  {path: 'teams', component: TeamsComponent},
  {path: 'teams/:id', component: TeamUpdateComponent, resolve: { team: TeamResolver }},
  {path: 'players', component : PlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
