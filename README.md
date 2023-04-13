## Zadanie 4

Rozpoczynamy pracę nad frontendem!

W aplikacji został już dodany Tailwind - chcielibyśmy, aby ChatGPT generował szablony wykorzystujące klasy Tailwind. Jako zadanie dodatkowe możemy poprosić ChatGPT o tutorial, jak dodać Tailwind do projektu. Należy jednak pamiętać, że instrukcje, które otrzymamy, mogą nie być poprawne z powodu ograniczeń wiedzy ChatGPT, który kończy się we wrześniu 2021. W takim przypadku można skorzystać z dokumentacji biblioteki i skopiować ją do rozmowy.

W ramach tego zadania chcemy:
- wygenerować serwisy, które będą komunikować się z backendem (warto wkleić listę endpointów w rozmowę, aby ChatGPT miał kontekst)
- wygenerować stronę główną "Dashboard", która będzie miała nagłówek z nazwą aplikacji, logotypem i nawigacją
- wygenerować komponent, który będzie wyświetlał listę zgłoszeń (komponent będzie korzystał z nowego serwisu)

Wygodnym sposobem na uruchomienie aplikacji w trybie deweloperskim jest wykorzystanie komendy:
```
ng s
```

Docker buduje aplikację za każdym razem, co jest niewygodne, gdy chcemy szybko zobaczyć zmiany.

Do weryfikacji zadania możemy otworzyć aplikację w przeglądarce i przejrzeć interfejs użytkownika. Jeśli coś wygląda nieestetycznie, zawsze możemy poprosić ChatGPT o pomoc w poprawkach.