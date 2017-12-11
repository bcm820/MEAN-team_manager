import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

  constructor(private _http: HttpClient) { }

  list() {
    return this._http.get(`/api/list`);
  }
  
  add(player) {
    return this._http.post(`/api/create`, player)
  }

  update(player) {
    return this._http.post(`/api/update/${player._id}`, player);
  }

  delete(id) {
    return this._http.post(`/api/delete/${id}`, null)
  }

}
