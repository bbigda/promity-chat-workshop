import { Component } from '@angular/core';
import {IssueService} from "./services/issue.service";
import {IssueTypeService} from "./services/issue-type.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jira2angular';

  constructor(private issueSerice:IssueService, private issueTypeService:IssueTypeService) {
    issueSerice.getIssues().subscribe(issues =>{
      console.dir(issues);
    });

    issueTypeService.getIssueTypes().subscribe(issueTypes =>{
      console.dir(issueTypes);
    });
  }


}
