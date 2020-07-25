import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  squares: any[];
  xIsNext: boolean;
  winner: string;
  nextPlayer: String = 'X';
  conterOfClicks: number = 0;

  constructor() { }

  ngOnInit(): void {

    this.newGame();
  }

  //pokretanje nove igre
  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.conterOfClicks = 0;
  }

  //Odtedjuje koji je player na redu, tj znak
  get player(){
    return this.xIsNext ? 'X' : 'O';
  }

  //Izbacivanje opcije da se klikne na vec kliknutu kocku
  makeMove(index: number){

    this.conterOfClicks++;

    //Ispituje ko igra sledeci
    if(!this.xIsNext){
      this.nextPlayer = 'X';
    }
    else{
      this.nextPlayer = 'O';
    }

    if(!this.winner){

      if(!this.squares[index]){
        
        this.squares.splice(index, 1, this.player);
        this.xIsNext = !this.xIsNext;
      }
  
      this.winner = this.calculateWinner();

      //Provera da li je svako polje popunjeno i da nema pobedinka, ako je tacno restartuje sve
      if(this.conterOfClicks == 9 && this.winner == null){
        this.newGame();
      }
    }
  }


  //Algoritam za proveravanje da li je neko pobedio
  calculateWinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for(let i = 0; i < lines.length; i++){

      const [a, b, c] = lines[i];
      if(this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]){

        return  this.squares[a];
      }
    }

    return null;
  }

}
