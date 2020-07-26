import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiseService } from '../servise.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  constructor(public route: ActivatedRoute, public servise: ServiseService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(localStorage.getItem('apikey')){
        this.servise.disable = false;
      }
    })
  }

}
