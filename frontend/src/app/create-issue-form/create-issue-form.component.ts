import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IssueService } from '../services/issue.service';
import { IssueTypeService } from '../services/issue-type.service';
import {IssueType} from "../models/issue-type";

@Component({
    selector: 'app-create-issue-form',
    templateUrl: './create-issue-form.component.html',
    styleUrls: ['./create-issue-form.component.css']
})
export class CreateIssueFormComponent implements OnInit {
    createIssueForm: FormGroup;
    issueTypes: IssueType[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private dialogRef: MatDialogRef<CreateIssueFormComponent>,
        private issueService: IssueService,
        private issueTypeService: IssueTypeService
    ) {
        this.createIssueForm = this.formBuilder.group({
            title: ['', Validators.required],
            description: [''],
            issueType: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.issueTypeService.getIssueTypes().subscribe((issueTypes: IssueType[]) => {
            this.issueTypes = issueTypes;
            this.createIssueForm.get('issueType')?.patchValue(issueTypes[0]);
        });
    }

    onSubmit(): void {
        if (this.createIssueForm.valid) {
            this.issueService.createIssue(this.createIssueForm.value).subscribe(() => {
                this.dialogRef.close(true);
            });
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
