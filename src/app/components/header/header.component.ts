import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuToggled:boolean = false;
  menuClass:String = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  toggleMobileMenu(){
    this.menuToggled = !this.menuToggled;
    this.handleClass();
  }

  handleClass():void{
      if (this.menuToggled){
        this.menuClass = 'open animate__animated animate__fadeIn animate__faster';
      } else this.menuClass = '';
  }

}
