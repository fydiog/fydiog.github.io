import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';
import { LocalJSONService } from '../../services/localjson.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  hardSkills:Skill[] = [];
  softSkills:Skill[] = [];

  constructor(private json:LocalJSONService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(){
    this.json.getLocalJSON('skills')
    .subscribe((skills:any)=>{
      this.hardSkills = this.hardSkills.concat(skills.filter((skill:any)=>skill.type == 'hard'))
      this.softSkills = this.softSkills.concat(skills.filter((skill:any)=>skill.type == 'soft'))
      console.log(this.hardSkills)
    })
  }

}
