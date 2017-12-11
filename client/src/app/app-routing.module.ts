import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'players/list'},
  {path:'players/addplayer', component: AddComponent},
  {path:'players/list', component: ListComponent},
  {path:'status/game/:game', component: GameComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
