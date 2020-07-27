import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  key: string;

  constructor(private servis: ServiseService) { }

  ngOnInit(): void {}

  
  onSubmit(form: NgForm){
      this.key = '539c9ba0-9543-472f-8a3a-47bb29426a65';
      let player_Name = form.value.name;

    if(!localStorage.getItem('apikey')){
      //kreiranje apikey
      this.servis.registerCandidate(this.key).subscribe(res => {
        localStorage.setItem('apikey', res.apikey);
     })

     //Kreiranje playera
      this.servis.player(player_Name, this.key).subscribe(res => {
       localStorage.setItem('playerName', player_Name);
       localStorage.setItem('playerId', res.id);
     })

     //Kreiranje Borda
     this.servis.createBoard(this.key).subscribe(res => {
      localStorage.setItem('idOfBord', res.id);
    })

    //Kreiranje id bordova i kolicine playera
    this.servis.onBoards(this.key).subscribe((res) => {
      res.forEach((el) => {
        this.servis.bordsCreatedId.push(el.id);
        this.servis.players.push(el.players);
      })
      localStorage.setItem('idOfBords', JSON.stringify(this.servis.bordsCreatedId));
      localStorage.setItem('players:', JSON.stringify(this.servis.players));
    })

   //U slucaju da je vec napravljen apikey
    }else{
      alert("You've already created a player!");
    }  
  }

}
