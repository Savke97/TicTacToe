import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiseService {

  constructor(private http: HttpClient) { }

  disable: Boolean = true;
  idOfPlayer: string;
  bordsCreatedId: any[] = [];
  players: any[] = [];
  
  registerCandidate(apikey: String){
      return this.http.post<any>('http://178.128.206.150:7000/register_candidate',{apikey});
  }

  player(name: String, apikey: String){
    return this.http.post<any>('http://178.128.206.150:7000/player',{name, apikey});
  }

  createBoard(apikey: String){
    return this.http.post<any>('http://178.128.206.150:7000/create_board',{apikey});
  }

  onBoards(apikey: String){
    return this.http.post<any>('http://178.128.206.150:7000/boards',{apikey});
  }
}
