# backend/Dockerfile

# Build stage
FROM gradle:jdk11 as build
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN gradle clean build --no-daemon

# Run stage
FROM adoptopenjdk:11-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
