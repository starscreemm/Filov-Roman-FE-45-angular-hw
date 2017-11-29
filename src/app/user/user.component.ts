import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../-services/users.service';
import { PhotosService } from '../-services/photos.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService, PhotosService]
})
export class UserComponent implements OnInit {
  
  user;
  albums;
  photos;
  photosLoad;
  constructor(
    private usersService: UsersService,
    private photosService: PhotosService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser();
    this.getAlbums();
  }

  getUser(){
    let id = this.router.snapshot.paramMap.get('id');
    this.usersService.getUser(id)
    .subscribe(
      res => {
        this.user = res;
      }
    )
  }

  getAlbums(){
    let id = this.router.snapshot.paramMap.get('id');
    this.usersService.getUserAlbums(id)
    .subscribe(
      res => {
        this.albums = res;
      }
    )
  }
  
  getPhotos(albumId){
    this.photosLoad = true;
    this.photosService.getPhotos(albumId)
      .subscribe(
        res => {
          this.photos = res;
          this.photosLoad = false;
        }
      )
  }

}
