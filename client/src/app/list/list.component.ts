import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: any = [];
  
  constructor(private _ts: TeamService, private _router: Router) { }

  ngOnInit() {
    this.listPlayers();
  }

  delete(id){
    if(confirm("Are you sure?")){
      this._ts.delete(id).subscribe(res => this.listPlayers());
    }
  }

  listPlayers(){
    this._ts.list().subscribe(players => this.players = players);
  }

  addPlayer(){
    this._router.navigate(['players','addplayer'])
  }

}
