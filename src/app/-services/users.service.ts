import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(
    private http: Http
  ) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json())
  }

  getUser(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
      .map(res => res.json())
  }

  getUserAlbums(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/albums?userId='+userId)
      .map(res => res.json())
  }

}
