## Zadanie 3

W tym zadaniu będziemy ulepszać backend!

Po pierwsze, dodamy konfigurację CORS, aby nasza aplikacja Angularowa mogła się połączyć. Zależy nam na tym, aby API przyjmowało połączenia z adresów:
- localhost:4200
- localhost:80
- localhost

Prosimy o przygotowanie pliku konfiguracyjnego oraz wskazanie, gdzie go umieścić.

Po drugie, dodamy obsługę Redis do naszych endpointów. Część konfiguracji jest już gotowa, jednak potrzebujemy:
- odpowiednich adnotacji dla kontrolerów
- odpowiedniej adnotacji dla głównej klasy w aplikacji
- poprawionej definicji modelu - możemy wkleić błąd z logów w czat żeby otrzymać poprawkę

Na koniec etapu chcemy, aby:
- aplikacja frontend nie wyświetlała błędu CORS
- działał cache dla endpointów

Działanie Redis możemy zweryfikować za pomocą następujących poleceń:
```
>redis-cli
>AUTH redispassword
ok
>MONITOR
ok
…
```