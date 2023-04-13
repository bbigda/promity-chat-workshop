package com.example.jira2.controllers;

import com.example.jira2.models.Issue;
import com.example.jira2.models.IssueType;
import com.example.jira2.repositories.IssueRepository;
import com.example.jira2.repositories.IssueTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/issues")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private IssueTypeRepository issueTypeRepository;

    @GetMapping
    public List<Issue> getAllIssues() {
        return issueRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Issue> getIssueById(@PathVariable UUID id) {
        return issueRepository.findById(id);
    }


    @PostMapping
    public Issue createIssue(@RequestBody Issue issue) {
        UUID issueTypeId = issue.getIssueType().getId();
        IssueType issueType = issueTypeRepository.findById(issueTypeId)
                .orElseThrow(() -> new IllegalArgumentException("IssueType not found"));
        issue.setIssueType(issueType);
        return issueRepository.save(issue);
    }

    @PutMapping("/{id}")
    public Issue updateIssue(@PathVariable UUID id, @RequestBody Issue issueDetails) {
        Issue issue = issueRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Issue not found"));
        issue.setTitle(issueDetails.getTitle());
        issue.setDescription(issueDetails.getDescription());
        issue.setStatus(issueDetails.getStatus());
        issue.setPriority(issueDetails.getPriority());
        issue.setAssignee(issueDetails.getAssignee());
        issue.setIssueType(issueDetails.getIssueType());
        return issueRepository.save(issue);
    }

    @DeleteMapping("/{id}")
    public void deleteIssue(@PathVariable UUID id) {
        issueRepository.deleteById(id);
    }
}
