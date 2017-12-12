import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game;
  players: any = [];
  
  constructor(
    private _ts: TeamService,
    private _rt: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.listPlayers();
    this._rt.paramMap.subscribe(param => {
      this.game = param.get('game');
      for(let player of this.players){
        if(this.game === '1'){
          player.status = player.game1;
        } else if(this.game === '2'){
          player.status = player.game2;
        } else {
          player.status = player.game3;
        }
      }
    });
  }

  changeGame(num){
    this._router.navigate(['status','game', num])
  }

  update(id, status, game1, game2, game3){
    let player = {
      _id:id,
      status:status,
      game1:game1,
      game2:game2,
      game3:game3
    }
    if(this.game === '1'){ player.game1 = player.status }
    if(this.game === '2'){ player.game2 = player.status }
    if(this.game === '3'){ player.game3 = player.status }
    this._ts.update(player).subscribe(res => this.listPlayers());
  }

  listPlayers(){
    this._ts.list().subscribe(players => this.players = players);
  }

}
