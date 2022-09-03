import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[];

  constructor(
    private readonly router: Router
  ) {
    this.items = [
      {
        label: 'Teams',
        icon: 'pi pi-fw pi-users',
        command: this.goToTeams.bind(this)
      },
      {
        label: 'Players',
        icon: 'pi pi-fw pi-user',
        command: this.goToPlayers
      }
    ];
  }

  ngOnInit(): void {
  }

  goToPlayers(): void {
    console.log('goToPlayers');
  }
  goToTeams(): void {
    this.router.navigate(['teams']);
  }
}
