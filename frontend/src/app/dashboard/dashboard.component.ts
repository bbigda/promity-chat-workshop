import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateIssueFormComponent} from "../create-issue-form/create-issue-form.component";
import {IssueListComponent} from "../issue-list/issue-list.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    // Add ViewChild decorator to access the IssueListComponent
    @ViewChild(IssueListComponent) issueListComponent!: IssueListComponent;


    constructor(private dialog: MatDialog) {
    }

    // Add this method inside the DashboardComponent class
    openCreateIssueDialog(): void {
        const dialogRef = this.dialog.open(CreateIssueFormComponent, {
            width: '800px',
        });

        // Subscribe to the afterClosed observable
        dialogRef.afterClosed().subscribe((result) => {
            // Refresh the issue list
            this.issueListComponent.getIssues();
        });
    }


}
