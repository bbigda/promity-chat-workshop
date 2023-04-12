#!/bin/bash

# Backend folders and files
mkdir -p backend/src/main/java/com/example/jira2/{controllers,models,repositories,services}
mkdir -p backend/src/main/resources
mkdir -p backend/src/test/java/com/example/jira2

touch backend/src/main/java/com/example/jira2/models/Issue.java
touch backend/src/main/java/com/example/jira2/models/IssueType.java
touch backend/src/main/java/com/example/jira2/Jira2Application.java
touch backend/src/main/resources/application.properties
touch backend/build.gradle
touch backend/gradlew
touch backend/gradlew.bat
touch backend/settings.gradle
touch backend/Dockerfile

# Frontend folders and files
mkdir -p frontend/src/app/issue
mkdir -p frontend/src/app/issue-type

touch frontend/src/app/issue/issue.component.ts
touch frontend/src/app/issue/issue.component.html
touch frontend/src/app/issue/issue.component.scss
touch frontend/src/app/issue-type/issue-type.component.ts
touch frontend/src/app/issue-type/issue-type.component.html
touch frontend/src/app/issue-type/issue-type.component.scss
touch frontend/src/index.html
touch frontend/src/styles.scss
touch frontend/angular.json
touch frontend/package.json
touch frontend/tsconfig.json
touch frontend/Dockerfile

# Docker and other files
touch .dockerignore
touch docker-compose.yml
touch .env
touch README.md
