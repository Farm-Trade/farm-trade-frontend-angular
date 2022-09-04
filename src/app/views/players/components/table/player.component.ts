import {Component, OnInit} from '@angular/core';
import {Player} from "../../../../shared/entities/models/players/player.model";
import {TableAction} from "../../../../shared/entities/interfaces/table-action.interface";
import {PlayersService} from "../../services/players.service";
import {Subscription} from "rxjs";
import {Team} from "../../../../shared/entities/models/teams/team.model";
import {DialogService} from "primeng/dynamicdialog";
import {PlayerUpdateComponent} from "../form/player-update.component";

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
    private readonly playerService: PlayersService,
    private readonly dialogService: DialogService
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

  public onActionHandler(event: { id: string, target: Player }): void {
    if (!event.target.id) {
      return;
    }
    switch (event.id) {
      case 'edit':
        this.onEdit(event.target);
        break;
      case 'delete':
        this.onDelete(event.target.id);
        break;
    }
  }

  public onCreate(): void {
    this.openDialog(new Player());
  }

  public onEdit(player: Player): void {
    this.openDialog(player);
  }

  private openDialog(player: Player): void {
    const ref = this.dialogService.open(
      PlayerUpdateComponent,
      {
        data: player,
        header: player.id ? `Edit ${player.fullName}` : "New Player",
        width: '50%',
        height: '60vh'
      }
    )

    ref.onClose.subscribe(() => this.getPlayers());
  }

  private onDelete(id: number): void {

  }

  private getPlayers(): void {
    const getPlayers$: Subscription = this.playerService.getPlayers()
      .subscribe(players => this.players = players);
    this.subscriptions$.add(getPlayers$);
  }
}
