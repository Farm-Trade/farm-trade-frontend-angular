import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Player} from "../../../shared/entities/models/players/player.model";
import {Observable} from "rxjs";

@Injectable()
export class PlayersService {
  private readonly urlAll: string = 'api/players/all';
  private readonly url: string = 'api/players';

  constructor(private readonly httpClient : HttpClient) { }

  public getPlayers() : Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.urlAll);
  }

  public createPlayer(player: Player, team: number): Observable<Player> {
    return this.httpClient.post<Player>(this.url, {...player, team});
  }
  public updatePlayer(player: Player, id: number, team: number): Observable<Player> {
    return this.httpClient.put<Player>(`${this.url}/${id}`, {...player, team});
  }
  public save(player: Player): Observable<Player> {
    const id: number = player.id as number;
    delete player.id;
    if (id) {
      return this.updatePlayer(player, id, player.team?.id as number);
    }
    return this.createPlayer(player, player.team?.id as number);
  }
}
