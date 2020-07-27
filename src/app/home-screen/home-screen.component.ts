import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiseService } from '../servise.service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, AfterViewInit {

  private socket: any;

  constructor(public route: ActivatedRoute, public servise: ServiseService, private soc: WebSocketService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(localStorage.getItem('apikey')){
        this.servise.disable = false;
      }
    })

    let bordId = localStorage.getItem('idOfBord')
    console.log(this.soc.emit('join_room', bordId));
  }

  ngAfterViewInit(): void {

    
  }

  

  onPlay(){
    /* let bordId = localStorage.getItem('idOfBord')
    this.socket.emit('join_room', bordId, (res) => {
      console.log(`Ack: ${res}`);
    }) */
  }

}
