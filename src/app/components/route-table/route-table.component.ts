import {
  Component,
  OnInit
} from '@angular/core';

import {
  TSortColumn,
  TSortDirection
} from '../../types/sort.types';

import { NgForOf } from '@angular/common';
import { IRoute } from '../../interfaces/IRoute';
import { MOCK_ROUTES } from '../../mock-routes';

@Component({
  selector: 'app-route-table',
  templateUrl: './route-table.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./route-table.component.scss']
})

export class RouteTableComponent implements OnInit {
  public routes: IRoute[] = [];
  public sortColumn: TSortColumn | null = null;
  public sortDirection: TSortDirection = 'asc';

  public ngOnInit(): void {
    this.routes = [...MOCK_ROUTES];
  }

  public sort(column: TSortColumn): void {
    this.updateSortState(column);
    this.routes.sort((a: IRoute, b: IRoute) => this.compareRoutes(a, b, column));
  }

  public getSortIcon(column: TSortColumn): string {
    if (this.sortColumn !== column) return '↕';
    return this.sortDirection === 'asc' ? '↑' : '↓';
  }

  private updateSortState(column: TSortColumn): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
  }

  private compareRoutes(a: IRoute, b: IRoute, column: TSortColumn): number {
    const comparison = column === 'interface'
      ? a[column].localeCompare(b[column])
      : this.compareIpAddresses(a[column], b[column]);

    return this.sortDirection === 'asc' ? comparison : -comparison;
  }

  private compareIpAddresses(ip1: string, ip2: string): number {
    const parts1: number[] = ip1.split('.').map(Number);
    const parts2: number[] = ip2.split('.').map(Number);

    for (let i = 0; i < 4; i++) {
      if (parts1[i] !== parts2[i]) {
        return parts1[i] - parts2[i];
      }
    }
    return 0;
  }
}
