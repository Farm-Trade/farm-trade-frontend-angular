import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CustomSharedModule} from "./shared/custom-shared.module";
import { TeamsComponent } from './views/teams/screen/table/teams.component';
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {TeamsService} from "./views/teams/services/teams.service";

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent
  ],
  imports: [
    CustomSharedModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    TeamsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
