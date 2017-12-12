import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  player = {
    name:'',
    position:'',
    game1:'maybe',
    game2:'maybe',
    game3:'maybe',
    status:'maybe'
  }
  
  constructor(private _ts: TeamService, private _router: Router) { }

  ngOnInit() {
  }

  add(){
    this._ts.add(this.player).subscribe(res => console.log(res));
    this.player = {
      name:'',
      position:'',
      game1:'maybe',
      game2:'maybe',
      game3:'maybe',
      status:'maybe'
    }
    this._router.navigate(['players','list']);
  }

  list(){
    this._router.navigate(['players','list']);
  }

}
