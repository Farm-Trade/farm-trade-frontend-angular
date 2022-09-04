import {Component, OnInit} from '@angular/core';
import {Team} from "../../../../shared/entities/models/teams/team.model";
import {TeamsService} from "../../services/teams.service";
import {ActivatedRoute} from "@angular/router";
import {catchError, pipe, throwError} from "rxjs";

@Component({
  selector: 'app-form',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.css']
})
export class TeamUpdateComponent implements OnInit {

  public team: Team = new Team();

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly teamService: TeamsService
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ team }) => this.team = team)
    // this.activatedRoute.params.subscribe(params => {
    //   const id: number = +params['id'];
    //   if (!isNaN(id) && id !== 0) {
    //     this.teamService.getTeam(params['id']).subscribe(team => this.team = team)
    //   }
    // });

    // this.activatedRoute.params.pipe(
    //   switchMap(params => {
    //     const id: number = +params['id'];
    //     if (!isNaN(id) && id !== 0) {
    //       return this.teamService.getTeam(params['id']);
    //     }
    //     return of(new Team());
    //   })
    // ).subscribe(team => this.team = team);
  }

}
