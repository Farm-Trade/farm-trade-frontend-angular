import { Component, OnInit } from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Player} from "../../../../shared/entities/models/players/player.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Team} from "../../../../shared/entities/models/teams/team.model";
import {TeamsService} from "../../../teams/services/teams.service";
import {Observable, of} from "rxjs";
import {PlayersService} from "../../services/players.service";

@Component({
  selector: 'app-form',
  templateUrl: './player-update.component.html',
  styleUrls: ['./player-update.component.css']
})
export class PlayerUpdateComponent implements OnInit {

  public player: Player;
  public form: FormGroup;
  public teams$: Observable<Team[]>;

  constructor(
    private readonly teamService: TeamsService,
    private readonly playersService: PlayersService,
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
    private readonly fb: FormBuilder
  ) {
    this.teams$ = of([]);
    this.player = config.data;
    this.form = this.fb.group({
      id: [this.player.id],
      fullName: [this.player.fullName, [Validators.minLength(8), Validators.required]],
      dateOfBirth: [this.player.dateOfBirth, [Validators.required]],
      startOfCareer: [this.player.startOfCareer, [Validators.required]],
      team: [this.player.team, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
  }

  close(): void {
    this.ref.close();
  }

  save(): void {
    const toSave: Player = this.fromForm();
    this.playersService.save(toSave).subscribe(player => this.ref.close(player));
  }

  private fromForm(): Player {
    const values = { ...this.form.value }
    return Player.fromObject(values);
  }
}
