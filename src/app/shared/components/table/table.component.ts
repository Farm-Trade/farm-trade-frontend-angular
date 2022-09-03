import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TableAction} from "../../entities/interfaces/table-action.interface";

@Component({
  selector: 'app-data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public values: any[] = [];
  @Input()
  public headers: string[] = [];
  @Input()
  public keys: string[] = [];
  @Input()
  public actions: TableAction[] = [];
  @Input()
  public loading: boolean = false;
  @Output()
  public actionPerformed: EventEmitter<{id: string, target: any}> = new EventEmitter<{id: string; target: any}>();

  constructor() { }

  ngOnInit(): void {
  }

}
