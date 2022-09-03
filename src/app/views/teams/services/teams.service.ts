import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../../../shared/entities/models/teams/team.model";

@Injectable()
export class TeamsService {
  private readonly url: string = 'api/teams';

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  public getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.url);
  }

  deleteTeam(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
