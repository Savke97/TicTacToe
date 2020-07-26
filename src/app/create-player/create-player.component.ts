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

  ngOnInit(): void {
   
  }

  
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
       localStorage.setItem('name', player_Name);
     })

   //U slucaju da je vec napravljen apikey
    }else{
      alert("Vec si kreirao pleyera!");
    }  
  }

}
