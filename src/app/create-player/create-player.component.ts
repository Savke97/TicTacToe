import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }


  onSubmit(form: NgForm){
    
      let player_Name = form.value.name;
  }

}
