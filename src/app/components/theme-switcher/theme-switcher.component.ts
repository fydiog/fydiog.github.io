import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {


  constructor(private themeService:ThemeService) {
   }

  ngOnInit(): void {
  }


  public get currentTheme(){
    return this.themeService.current;
  }

  public switchTheme(): void {
    if (this.themeService.current === 'light') {
        this.themeService.current = 'dark';

    } else {
        this.themeService.current = 'light';

    }
  }

}
