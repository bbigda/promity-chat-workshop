import {IssueType} from "./issue-type";

export interface Issue {
    id: number;
    title: string;
    description?: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    issueType?: IssueType;
}

export interface NewIssue extends Omit<Issue, 'id'> {}
