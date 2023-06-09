package com.example.jira2.controllers;

import com.example.jira2.models.IssueType;
import com.example.jira2.repositories.IssueTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v2/issue-types")
public class IssueTypeController {

    @Autowired
    private IssueTypeRepository issueTypeRepository;

    @GetMapping
    @Cacheable(value = "issueTypes")
    public List<IssueType> getAllIssueTypes() {
        return issueTypeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<IssueType> getIssueTypeById(@PathVariable UUID id) {
        return issueTypeRepository.findById(id);
    }

    @PostMapping
    @CacheEvict(value = "issueTypes", allEntries = true)
    public IssueType createIssueType(@RequestBody IssueType issueType) {
        return issueTypeRepository.save(issueType);
    }

    @PutMapping("/{id}")
    @CacheEvict(value = "issueTypes", allEntries = true)
    public IssueType updateIssueType(@PathVariable UUID id, @RequestBody IssueType issueTypeDetails) {
        IssueType issueType = issueTypeRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("IssueType not found"));
        issueType.setName(issueTypeDetails.getName());
        issueType.setDescription(issueTypeDetails.getDescription());
        return issueTypeRepository.save(issueType);
    }

    @DeleteMapping("/{id}")
    @CacheEvict(value = "issueTypes", allEntries = true)
    public void deleteIssueType(@PathVariable UUID id) {
        issueTypeRepository.deleteById(id);
    }
}
