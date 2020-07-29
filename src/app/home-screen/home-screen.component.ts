import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiseService } from '../servise.service';
import { WebSocketService } from '../web-socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, AfterViewInit {
  servise: Boolean = true;
  playerRegistred: String;
  a: any;


  constructor(public route: ActivatedRoute, public router: Router, public service: ServiseService, private webSocket: WebSocketService) { 
    this.service.onBoards(localStorage.getItem('givenApiKey') || '539c9ba0-9543-472f-8a3a-47bb29426a66').subscribe((res) => {
      localStorage.setItem('ListOfBoards', JSON.stringify(res))
    })

    this.playerRegistred = localStorage.getItem('playerName')
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (localStorage.getItem('givenApiKey')) {
        this.servise = false;
      }

    })

    this.webSocket.listen('left').subscribe((res) => {
      this.a = res;
      alert("Game left: " + this.a.player.name)
    })
  }

  ngAfterViewInit(): void {}



  onPlay() {}

}
