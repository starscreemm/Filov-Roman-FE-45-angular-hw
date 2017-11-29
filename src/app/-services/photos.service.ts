import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class PhotosService {

  constructor(
    private http: Http
  ) { }
  
  getPhotos(albumId?){
    let url;
    if(albumId){
      url = 'https://jsonplaceholder.typicode.com/photos?albumId='+albumId;
    }
    else{
      url = 'https://jsonplaceholder.typicode.com/photos';
    }
    return this.http.get(url)
      .map(res => res.json())
  }

  getBigPhoto(id) {
    let url = 'https://jsonplaceholder.typicode.com/photos/' + id;
    return this.http.get(url)
      .map(res => res.json())
  }

}
