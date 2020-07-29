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

  ngOnInit(): void { }


  onSubmit(form: NgForm) {
    this.key = '539c9ba0-9543-472f-8a3a-47bb29426a66';

    localStorage.setItem('givenApiKey', this.key);


    let player_Name = form.value.name;

    if (!localStorage.getItem('apikey')) {

      this.servis.disable = true;

      this.servis.registerCandidate(this.key).subscribe(res => {
       
        this.servis.player(player_Name, res.apikey).subscribe(res => {
          localStorage.setItem('playerName', player_Name);
          localStorage.setItem('playerId', res.id);
        })

        this.servis.createBoard(this.key).subscribe(res => {
          localStorage.setItem('idOfBord', res.id);
        })

      })
    }
  }

}
