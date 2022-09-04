import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../../../shared/entities/models/players/player.model";
import {Observable} from "rxjs";

@Injectable()
export class PlayersService {
  private readonly url: string = 'api/players/all';

  constructor(private readonly httpClient : HttpClient) { }

  public getPlayers() : Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.url);
  }
}
