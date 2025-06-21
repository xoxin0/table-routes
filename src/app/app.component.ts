import { Component } from '@angular/core';
import { RouteTableComponent } from './components/route-table/route-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouteTableComponent
  ],
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'route-table-app';
}
