import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SquareComponent } from './square/square.component';
import { ServiseService } from './servise.service';
import { WebSocketService } from './web-socket.service';
import { ListOfPlayersComponent } from './list-of-players/list-of-players.component';



const appRouts: Routes = [
  {path: "", component: HomeScreenComponent},
  {path: "TicTacToe/:idOfBoard", component: TicTacToeComponent},
  {path: "CreatePlayer", component: CreatePlayerComponent},
  {path: "ListOfPlayers", component: ListOfPlayersComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
]


@NgModule({
  declarations: [
    AppComponent,
    CreatePlayerComponent,
    ListOfPlayersComponent,
    TicTacToeComponent,
    HomeScreenComponent,
    PageNotFoundComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouts),
  ],
  providers: [ServiseService, WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
