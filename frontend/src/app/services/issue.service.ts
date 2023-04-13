import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Issue, NewIssue} from "../models/issue";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private baseUrl = environment.baseUrl + '/issues';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issue[]> {
    return this.http.get<Issue[]>(this.baseUrl);
  }

  getIssue(id: string): Observable<Issue> {
    return this.http.get<Issue>(`${this.baseUrl}/${id}`);
  }

  createIssue(issue: NewIssue): Observable<Issue> {
    return this.http.post<Issue>(this.baseUrl, issue);
  }

  updateIssue(id: string, issue: Issue): Observable<Issue> {
    return this.http.put<Issue>(`${this.baseUrl}/${id}`, issue);
  }

  deleteIssue(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
