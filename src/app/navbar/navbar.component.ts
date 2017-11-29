import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  visible: boolean = false;
  ngOnInit() {
  }
  

    
  toggle() {
    this.visible = (this.visible === false ? true : false);
  }

}
