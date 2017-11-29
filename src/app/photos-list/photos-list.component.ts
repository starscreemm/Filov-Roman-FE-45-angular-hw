import { Component, OnInit, Input } from '@angular/core';
import { PhotosService } from '../-services/photos.service';

@Component({
  selector: 'photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [PhotosService]
})
export class PhotosListComponent implements OnInit {
  
  photos;
  bigPhoto;
  currentAlbum = 1;
  lastAlbum;
  loader;
  constructor( private photosService: PhotosService ) { }
  ngOnInit() {
    this.loader = true;
    this.photosService.getPhotos(this.currentAlbum)
    .subscribe(
      res => {
        this.photos = res;
        this.loader = false;
      }
    )
    this.getLastAlbum();
}

getLastAlbum() {
  this.photosService.getPhotos()
  .subscribe(
    res => {
      this.lastAlbum = res[res.length - 1].albumId;
    }
  )
}
  

  loadNextAlbum() {
      this.loader = true;
      this.currentAlbum++;
      this.photosService.getPhotos(this.currentAlbum)
      .subscribe(
        res => {
          this.photos = this.photos.concat(res);
          this.loader = false;
        }
      )
  }
}
