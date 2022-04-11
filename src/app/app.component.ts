import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'portfolio-ng';
  loadingBarHeight:string = '4px';
  
  constructor(private themeService:ThemeService){

   
  }

  get loadingBarColor(){
    if (this.themeService.current == 'light') return 'black'
    else return 'white';
  }


  ngOnInit(): void {
        
  }
  
 


 

}
