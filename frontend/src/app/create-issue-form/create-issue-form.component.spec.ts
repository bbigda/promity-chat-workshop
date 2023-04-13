import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateIssueFormComponent} from './create-issue-form.component';
import {IssueService} from '../services/issue.service';
import {IssueTypeService} from '../services/issue-type.service';
import {of} from 'rxjs';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {IssueType} from "../models/issue-type";

fdescribe('CreateIssueFormComponent', () => {
    let component: CreateIssueFormComponent;
    let fixture: ComponentFixture<CreateIssueFormComponent>;
    let issueService: IssueService;
    let issueTypeService: IssueTypeService;

    beforeEach(async () => {
        const issueServiceStub = {
            createIssue: () => of({})
        };

        const issueTypeServiceStub = {
            getIssueTypes: () => of([{id: 1, name: 'Bug'}])
        };

        await TestBed.configureTestingModule({
            declarations: [CreateIssueFormComponent],
            imports: [
                ReactiveFormsModule,
                BrowserAnimationsModule,
                MatDialogModule,
                MatFormFieldModule,
                MatInputModule,
                MatSelectModule],
            providers: [
                {provide: IssueService, useValue: issueServiceStub},
                {provide: IssueTypeService, useValue: issueTypeServiceStub},
                {
                    provide: MatDialogRef,
                    useValue: jasmine.createSpyObj('MatDialogRef', ['close']),
                },
            ]
        }).compileComponents();

        issueService = TestBed.inject(IssueService);
        issueTypeService = TestBed.inject(IssueTypeService);
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateIssueFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should submit the form and call issueService.createIssue()', () => {
        spyOn(issueService, 'createIssue').and.callThrough();

        component.createIssueForm.setValue({
            title: 'Test Issue',
            description: 'This is a test issue',
            issueType: {id: 1, name: 'Bug'}
        });

        component.onSubmit();
        expect(issueService.createIssue).toHaveBeenCalled();
    });

    it('should populate issueTypes on component init', () => {
        const mockIssueTypes: IssueType[] = [
            { id: 1, name: 'Bug' },
        ];

        fixture.detectChanges();

        // Check if the issueTypes property is populated with the mock data
        expect(component.issueTypes).toEqual(mockIssueTypes);
    });
});
