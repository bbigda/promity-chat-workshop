# Zadanie 1: Tworzenie Docker Compose i Dockerfiles dla projektu full-stack

Celem tego zadania jest stworzenie aplikacji full-stack z wykorzystaniem Docker Compose i Dockerfiles. W tym celu, wygenerujemy trzy pliki: Docker Compose, Dockerfile dla backendu oraz Dockerfile dla frontendu.

Aby wygenerować wymienione pliki, proszę podać do ChatGPT następujące informacje:

- aplikacja składać się będzie z java spring, angular, postgresql oraz redis
- potrzebujemy trzech plików: docker-compose, Dockerfile dla backendu oraz Dockerfile dla frontendu
- należy udostępnić odpowiednie porty
- proces budowania obu części aplikacji powinien składać się z dwóch kroków: build i run

Po wygenerowaniu plików, należy uruchomić aplikację za pomocą komendy:

```bash
docker-compose up --build -d
```

Następnie, w celu upewnienia się, że wszystko działa poprawnie, należy wykonać następujące komendy:

```bash
http://localhost:80 # w przeglądarce
```

```bash
curl http://localhost:8080/api
```

```bash
psql -h localhost -p 5432 -U myuser -W -d promity
mypassword
psql (15.2)
Type "help" for help.

promity=#
```

```bash
redis-cli
127.0.0.1:6379>
```

Wykorzystanie Docker Compose i Dockerfiles to bardzo efektywny sposób na wdrożenie aplikacji full-stack. Dzięki tym narzędziom, proces wdrażania aplikacji staje się znacznie prostszy i bardziej niezawodny.