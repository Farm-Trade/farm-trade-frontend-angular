import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Team} from "../../../shared/entities/models/teams/team.model";
import {TeamsService} from "../services/teams.service";
import {EMPTY, Observable, of} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TeamResolver implements Resolve<Team> {
  constructor(
    private readonly teamsService: TeamsService,
    private readonly router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Team> | Promise<Team> | Team {
    const id: string | null = route.paramMap.get('id');
    if (id !== null && !isNaN(+id) && +id !== 0) {
      return this.teamsService.getTeam(+id);
    } if (id !== null && id === 'new-team') {
      return of(new Team());
    }
    this.router.navigate(['teams', 'new-team']);
    return EMPTY;
  }
}
