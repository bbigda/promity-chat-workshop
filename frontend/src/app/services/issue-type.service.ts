import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IssueType, NewIssueType} from "../models/issue-type";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IssueTypeService {
  private baseUrl = environment.baseUrl + '/issue-types';

  constructor(private http: HttpClient) { }

  getIssueTypes(): Observable<IssueType[]> {
    return this.http.get<IssueType[]>(this.baseUrl);
  }

  getIssueType(id: string): Observable<IssueType> {
    return this.http.get<IssueType>(`${this.baseUrl}/${id}`);
  }

  createIssueType(issueType: NewIssueType): Observable<IssueType> {
    return this.http.post<IssueType>(this.baseUrl, issueType);
  }

  updateIssueType(id: string, issueType: IssueType): Observable<IssueType> {
    return this.http.put<IssueType>(`${this.baseUrl}/${id}`, issueType);
  }

  deleteIssueType(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
