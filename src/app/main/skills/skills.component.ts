import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/Service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  allSkills:any;
  software: any;
  os: any;

  constructor(private skillService: SkillsService) { 
    this.allSkills=skillService.skill;
    this.software=skillService.software;
    this.os=skillService.os;
    console.log(this.allSkills);
  }

  ngOnInit(): void {
  }

}
