import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomSharedModule} from "./shared/custom-shared.module";
import { TeamsComponent } from './views/teams/screen/table/teams.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {TeamsService} from "./views/teams/services/teams.service";
import { PlayerComponent } from './views/players/components/table/player.component';
import {PlayersService} from "./views/players/services/players.service";

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayerComponent
  ],
  imports: [
    CustomSharedModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    TeamsService,
    PlayersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
