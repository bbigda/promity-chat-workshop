## Zadanie 5

Mamy już listę zgłoszeń - teraz chcielibyśmy dodać możliwość dodawania nowych zgłoszeń. W ramach tego zadania:

- dodamy przycisk "CREATE ISSUE" do nagłówka
- po kliknięciu przycisku zostanie otwarty dialog z nowym komponentem
- komponent wyświetli formularz, dzięki któremu będziemy mogli dodać nowe zgłoszenie

Należy pamiętać o:
- dodaniu kilku typów zgłoszeń za pomocą API (np. przez curl lub Postman)
- użyciu ReactiveForm z Angulara, co uprości szablon i walidację
- użyciu istniejącego serwisu IssueService do przesyłania żądania POST

Jako dodatkowe zadanie możemy zaimplementować automatyczne odświeżanie listy po dodaniu nowego zgłoszenia.

Zadanie zostanie uznane za wykonane, gdy będziemy mogli dodawać nowe zgłoszenia do listy.