import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  public skill = [
    {
      "skillName": "Java",
      "percentage": 100
    },
    {
      "skillName": "Spring Boot",
      "percentage": 80
    },
    {
      "skillName": "Hibernate",
      "percentage": 100
    },
    {
      "skillName": "Angular",
      "percentage": 90
    },
    {
      "skillName": "SQL",
      "percentage": 90
    },
    {
      "skillName": "Javascript",
      "percentage": 95
    },
    {
      "skillName": "HTML/CSS",
      "percentage": 100
    },
    {
      "skillName": "Bootstrap",
      "percentage": 90
    },
    {
      "skillName": "DSA",
      "percentage": 90
    },
    {
      "skillName": "Material UI",
      "percentage": 85
    },
    {
      "skillName": "REST API",
      "percentage": 85
    },
    {
      "skillName": "Typescript",
      "percentage": 85
    },
    {
      "skillName": "Microservice",
      "percentage": 80
    },
    {
      "skillName": "JDBC",
      "percentage": 75
    },
    {
      "skillName": "Typescript",
      "percentage": 85
    },
    {
      "skillName": "JSON",
      "percentage": 75
    },
    {
      "skillName": "Junit",
      "percentage": 90
    },
    {
      "skillName": "Mockito",
      "percentage": 90
    },
    {
      "skillName": "JSP",
      "percentage": 90
    },
    {
      "skillName": "Jasmine",
      "percentage": 90
    },
    {
      "skillName": "karma",
      "percentage": 90
    },
    {
      "skillName": "NoSQL",
      "percentage": 90
    },
    {
      "skillName": "AWS",
      "percentage": 90
    },
    {
      "skillName": "Firebase",
      "percentage": 90
    },
    {
      "skillName": "Logical Building",
      "percentage": 90
    },
    {
      "skillName": "Clean Code",
      "percentage": 90
    },
    {
      "skillName": "IBM Technology",
      "percentage": 90
    }
  ];

  public software = [
    {
      "name": "Eclipse IDE",
    },
    {
      "name": "Intellij",
    },
    {
      "name": "Docker",
    },
    {
      "name": "Spring Tool Suite(STS)",
    },
    {
      "name": "Draw.io",
    },
    {
      "name": "Visual Studio Code",
    },
    {
      "name": "Postman",
    },
    {
      "name": "MySQL",
    },
    {
      "name": "Oracle",
    },
    {
      "name": "Mira DB",
    },
    {
      "name": "Docker",
    },
    {
      "name": "Github",
    },
    {
      "name": "Gitbash",
    },
    {
      "name": "Jenkins",
    },
    {
      "name": "Noteped++",
    },

    {
      "name": "Maven",
    },
    {
      "name": "SonarScanner",
    },
    {
      "name": "Service Now",
    },
  ];

  public os = [
    {
      "name": "Windows"
    },
    {
      "name": "Mac OS"
    }
  ];

  constructor() { }
}
