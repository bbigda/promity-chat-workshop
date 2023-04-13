// backend/src/main/java/com/example/jira2/entities/IssueType.java
package com.example.jira2.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "issue_types")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class IssueType implements Serializable {
    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private String description;
}
