import {Component, OnInit} from '@angular/core';
import {Player} from "../../../../shared/entities/models/players/player.model";
import {TableAction} from "../../../../shared/entities/interfaces/table-action.interface";
import {PlayersService} from "../../services/players.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-player-table',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public players: Player[] = [];
  public headers: string[];
  public keys: string[];
  public actions: TableAction[];
  public subscriptions$: Subscription = new Subscription();

  constructor(
    private playerService : PlayersService
  ) {
    this.headers = ['ID', 'Full Name', 'Date of Birth', 'Start of Career', 'Team'];
    this.keys = ['id', 'fullName', 'dateOfBirth', 'startOfCareer', 'team'];
    this.actions = [
      {id: 'edit', icon: 'pi pi-pencil'},
      {id: 'delete', icon: 'pi pi-trash'}
    ];
  }

  ngOnInit(): void {
    this.getPlayers()
  }

  private getPlayers() : void {
    const getPlayers$: Subscription = this.playerService.getPlayers()
      .subscribe(players=> this.players = players);
    this.subscriptions$.add(getPlayers$);
  }

}
