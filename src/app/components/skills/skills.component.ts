import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public frontend=[{id:"Angular",name:"80%",value:8},{id:"HTML",name:"80%",value:8},
                    {id:"CSS",name:"80%",value:8},{id:"Semantic UI",name:"80%",value:8},
                    {id:"bootstrap",name:"80%",value:8},{id:"javascript",name:"70%",value:7},
                    {id:"jquery",name:"60%",value:6},{id:"react",name:"60%",value:6}]
  public backend=[{id:"Java 8",name:"80%",value:8},{id:"Springboot",name:"80%",value:8},
                  {id:"Data JPA",name:"80%",value:8},{id:"Hibernate",name:"70%",value:7},
                  {id:"Restfull web services",name:"70%",value:7},{id:"mysql",name:"80%",value:8},
                  {id:"postgress",name:"80%",value:8},{id:"Oracle",name:"60%",value:6}]
  public tools=[{id:"AWS",name:"70%",value:7},{id:"c/c++",name:"70%",value:7},
                {id:"XML",name:"70%",value:7},{id:"json",name:"70%",value:7},
                {id:"Jira",name:"70%",value:7},{id:"Git",name:"70%",value:7},
                {id:"Bitbucket",name:"60%",value:6}]

public Allvalue=[[{id:"Angular",name:"80%",value:8},{id:"HTML",name:"80%",value:8},
                  {id:"CSS",name:"80%",value:8},{id:"Semantic UI",name:"80%",value:8},
                  {id:"bootstrap",name:"80%",value:8},{id:"javascript",name:"70%",value:7},
                  {id:"jquery",name:"60%",value:6},{id:"react",name:"60%",value:6}],
                [{id:"Java 8",name:"80%",value:8},{id:"Springboot",name:"80%",value:8},
                  {id:"Data JPA",name:"80%",value:8},{id:"Hibernate",name:"70%",value:7},
                  {id:"Restfull web services",name:"70%",value:7},{id:"mysql",name:"80%",value:8},
                  {id:"postgress",name:"80%",value:8},{id:"Oracle",name:"60%",value:6}],
                [{id:"AWS",name:"70%",value:7},{id:"c/c++",name:"70%",value:7},
                  {id:"XML",name:"70%",value:7},{id:"json",name:"70%",value:7},
                  {id:"Jira",name:"70%",value:7},{id:"Git",name:"70%",value:7},
                  {id:"Bitbucket",name:"60%",value:6}]]


  constructor() { }

  ngOnInit(): void {
  }

}
