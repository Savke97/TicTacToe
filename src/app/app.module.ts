import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import { ListOfPlayersComponent } from './list-of-players/list-of-players.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SquareComponent } from './square/square.component';



const appRouts: Routes = [
  {path: "", component: HomeScreenComponent},
  {path: "TicTacToe", component: TicTacToeComponent},
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
