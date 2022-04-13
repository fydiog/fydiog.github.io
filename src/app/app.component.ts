import { Component, HostBinding, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio-ng';
  loadingBarHeight:string = '4px';
  
  constructor(private themeService:ThemeService,private router: Router ){
  }

  get loadingBarColor(){
    if (this.themeService.current == 'light') return 'black'
    else return 'white';
  }


  ngOnInit(): void {
    //scroll to top of window when a routerlink nagivation event happens
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  
 


 

}
