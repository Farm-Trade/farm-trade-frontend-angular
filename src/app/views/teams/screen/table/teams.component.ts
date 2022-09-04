import {Component, OnDestroy, OnInit} from '@angular/core';
import {Team} from "../../../../shared/entities/models/teams/team.model";
import {TeamsService} from "../../services/teams.service";
import {TableAction} from "../../../../shared/entities/interfaces/table-action.interface";
import {delay, finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit, OnDestroy {

  public teams: Team[] = [];
  public headers: string[];
  public keys: string[];
  public actions: TableAction[];

  public subscriptions$: Subscription = new Subscription();
  public loading: boolean;

  constructor(
    private readonly teamsService: TeamsService
  ) {
    this.headers = ['ID', 'Name', 'Commission For Transfer', 'Balance'];
    this.keys = ['id', 'name', 'commissionForTransfer', 'balance'];
    this.actions = [
      {id: 'edit', icon: 'pi pi-pencil'},
      {id: 'delete', icon: 'pi pi-trash'}
    ];
    this.loading = false;
  }

  ngOnInit(): void {
    this.getTeams();
  }

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  public onActionHandler(event: { id: string, target: Team }): void {
    switch (event.id) {
      case 'edit':
        console.log(event.id, event.target);
        break;
      case 'delete':
        this.onDelete(event.target.id);
        break;
    }
  }

  private getTeams(): void {
    this.loading = true;
    const getTeams$: Subscription = this.teamsService.getTeams()
      .pipe(finalize(() => this.loading = false))
      .subscribe(teams => {
        this.teams = teams;
      });
    this.subscriptions$.add(getTeams$);
  }

  private onDelete(id: number): void {
    this.loading = true;
    const deleteTeam$: Subscription = this.teamsService.deleteTeam(id)
      .pipe(finalize(() => this.loading = false))
      .subscribe(() => this.getTeams());
    this.subscriptions$.add(deleteTeam$);
  }
}
