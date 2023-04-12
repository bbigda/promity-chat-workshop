# backend/Dockerfile

# Build stage
FROM gradle:jdk11 as build
WORKDIR /app
COPY --chown=gradle:gradle . .
RUN gradle build --no-daemon

# Run stage
FROM adoptopenjdk/openjdk11:alpine-jre
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
