## Zadanie 2

W pierwszej części zadania wygenerujemy schematy obiektów dla naszej aplikacji. Chcemy stworzyć prostą wersję JIRY 2 - zaczynając od tworzenia zgłoszenia (issue)!

Nasze cele to:
- Otrzymanie schematów obiektów "issue" i "issueType"
- Generowanie pliku yaml - w celu weryfikacji
- Generowanie interfejsów TypeScript

W drugiej części zadania dodamy API do zarządzania obiektami typu "issueType" do backendu. Zadanie to obejmuje:
- Dodanie nowego modelu
- Stworzenie nowego repozytorium
- Stworzenie nowego kontrolera

W aplikacji już istnieje funkcjonalność zarządzania zgłoszeniami (issue), co umożliwia nam odwołanie się do istniejącego kodu i wykorzystanie go jako podstawy do naszej implementacji. Chcemy ustanowić odpowiednią relację między obiektami "issue" i "issueType".

Zalecam uruchomienie aplikacji z użyciem Dockera, korzystając z polecenia:
```
docker-compose up backend --build
```

Możemy zweryfikować naszą implementację na kilka sposobów:
- Brak błędów wyświetlanych w logach
- Wysłanie żądania do punktu końcowego i sprawdzenie poprawności odpowiedzi
- Sprawdzenie, czy obiekty są zapisywane w bazie danych.