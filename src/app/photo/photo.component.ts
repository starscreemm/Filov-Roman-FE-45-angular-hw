import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhotosService } from '../-services/photos.service';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [PhotosService]
})
export class PhotoComponent implements OnInit {

  constructor( 
    private photosService: PhotosService
  ) { }
  bigPhoto;
  active: boolean = false;
  ngOnInit() {
    
  }
  
  @Input() photo;

  getBigPhoto(id) {
    this.photosService.getBigPhoto(id)
    .subscribe(
      res => {
        this.bigPhoto = res;
        this.active = true;
      }
    )
  }
  
  
  delete() {
    this.active = false;
  }

}
