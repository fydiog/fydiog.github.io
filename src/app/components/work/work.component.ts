import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Project } from 'src/app/interfaces/project.interface';
import { LocalJSONService } from '../../services/localjson.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor(private json:LocalJSONService) { }

  projects?:Project[];

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this.json.getLocalJSON('projects')
    // .pipe(first())
    .subscribe((projects:any[])=>{
      this.projects = projects;
    })
  }

}
