import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  items: any[]=[
    {icon:"chart-pie", link:"estadisticas"},
    {icon:"users", link:"usuarios"},
    {icon:"search",link:"usuarios"},
    {icon:"cog",link:"configuracion"},
    {icon:"sign-out",link:""}
  ];
}
