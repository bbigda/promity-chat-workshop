export interface IssueType {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface NewIssueType extends Omit<IssueType, 'id'> {}
