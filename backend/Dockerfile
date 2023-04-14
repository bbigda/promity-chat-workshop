# backend/Dockerfile

# Build stage
FROM gradle:7.6.1-jdk11 as build
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN gradle clean build --no-daemon --stacktrace

# Run stage
FROM adoptopenjdk:11-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
