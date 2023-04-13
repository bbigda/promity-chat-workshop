package com.example.jira2;

import com.example.jira2.controllers.IssueTypeController;
import com.example.jira2.models.IssueType;
import com.example.jira2.repositories.IssueTypeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class IssueTypeControllerTest {

    @InjectMocks
    private IssueTypeController issueTypeController;

    @Mock
    private IssueTypeRepository issueTypeRepository;

    private IssueType issueType1;
    private IssueType issueType2;

    @BeforeEach
    void setUp() {
        issueType1 = new IssueType(UUID.randomUUID(), "Bug", "");
        issueType2 = new IssueType(UUID.randomUUID(), "Feature Request", "");
    }

    @Test
    void getAllIssueTypes_shouldReturnAllIssueTypes() {
        List<IssueType> expectedIssueTypes = Arrays.asList(issueType1, issueType2);

        when(issueTypeRepository.findAll()).thenReturn(expectedIssueTypes);

        List<IssueType> response = issueTypeController.getAllIssueTypes();

        assertThat(response).isEqualTo(expectedIssueTypes);
    }

    @Test
    void alwaysPasses() {
        assertThat(true).isEqualTo(true);
    }
}
