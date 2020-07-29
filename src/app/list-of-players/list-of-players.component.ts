import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-players',
  templateUrl: './list-of-players.component.html',
  styleUrls: ['./list-of-players.component.css']
})

export class ListOfPlayersComponent implements OnInit {
  squares;
  myBord;


  constructor() {
  }

  ngOnInit(): void {
    this.squares = JSON.parse(localStorage.getItem('ListOfBoards'));
    this.myBord = localStorage.getItem('idOfBord');
  }

}
