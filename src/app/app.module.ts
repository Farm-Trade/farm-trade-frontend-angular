import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CustomSharedModule} from "./shared/custom-shared.module";
import { TeamsComponent } from './views/teams/screen/table/teams.component';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {TeamsService} from "./views/teams/services/teams.service";
import { PlayerComponent } from './views/players/components/table/player.component';
import {PlayersService} from "./views/players/services/players.service";
import { TeamUpdateComponent } from './views/teams/screen/form/team-update.component';
import {MessageModule} from "primeng/message";
import { PlayerUpdateComponent } from './views/players/components/form/player-update.component';
import {DialogService} from "primeng/dynamicdialog";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayerComponent,
    TeamUpdateComponent,
    PlayerUpdateComponent
  ],
  imports: [
    CustomSharedModule,
    CommonModule,
    AppRoutingModule,
    MessageModule,
    CalendarModule,
    DropdownModule,
    RippleModule,
    ReactiveFormsModule
  ],
  providers: [
    TeamsService,
    PlayersService,
    DialogService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
