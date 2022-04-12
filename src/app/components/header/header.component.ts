import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuToggled:boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  handleToggle(){
    this.menuToggled = !this.menuToggled;
  }

  get currentStyle():String{
      if (this.menuToggled) return 'flex';
      else return 'none';
  }

}
