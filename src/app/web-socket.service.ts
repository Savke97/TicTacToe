import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;

  constructor() {

    let playerId = localStorage.getItem('playerId');
    this.socket = io(`http://178.128.206.150:7000/${playerId ? `?id=${playerId}` : ''}`)
  }


  listen(eventName: string) {
    return new Observable((sub) => {
      this.socket.on(eventName, (data) => {
        sub.next(data);
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  };
}

