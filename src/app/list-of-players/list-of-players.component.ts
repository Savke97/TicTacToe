import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-players',
  templateUrl: './list-of-players.component.html',
  styleUrls: ['./list-of-players.component.css']
})
export class ListOfPlayersComponent implements OnInit {

  squares: any = [
    {
      name: 'Bojan',
      score: '20'
    },
    {
      name: 'Laki',
      score: '25'
    },
    {
      name: 'Uros',
      score: '19'
    },
  ];

  constructor() {
   }

  ngOnInit(): void {
  }

}
