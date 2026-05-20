# Projekt Sklepu Internetowego

## 1. Nazwa i krótki opis projektu

Sklep Internetowy
Responsywna aplikacja webowa umożliwiająca przeglądanie produktów, logowanie użytkowników, dodawanie produktów do koszyka oraz zarządzanie kontem użytkownika.

Projekt został wykonany z użyciem HTML, CSS, JavaScript oraz Node.js.

---

## 2. Jak uruchomić

### Sposób 1 — lokalnie

1. Pobierz wszystkie pliki projektu.
2. Upewnij się, że Node.js jest zainstalowany.
3. Otwórz terminal w folderze projektu.
4. Zainstaluj zależności:

npm install

5. Uruchom serwer:

node server.js

6. Otwórz przeglądarkę i przejdź do:

[http://localhost:3000/main-page/](http://localhost:3000/main-page/)

---

### Sposób 2 — GitHub

Wejdź na repozytorium projektu:

[(https://github.com/neolov/2AP_DZMITRY_MELEKH_PROJOPP_AP_e1/tree/main)](https://github.com/neolov/2AP_DZMITRY_MELEKH_PROJOPP_AP_e1/tree/main)

---

## 3. Funkcje

### Użytkownicy
- Rejestracja użytkownika
- Logowanie i wylogowanie
- Dane użytkowników zapisane w users.json
- Strona konta użytkownika

### Produkty
- Wyświetlanie produktów
- Strona produktu
- Kategorie produktów
- Responsywny układ sklepu

### Koszyk
- Dodawanie produktów do koszyka
- Usuwanie produktów z koszyka
- Podsumowanie zamówienia

### Interfejs
- Responsywny design
- Animacje CSS
- Intuicyjna nawigacja
- Bannery reklamowe

### Dodatkowe strony
- Kontakt
- Regulamin
- Polityka prywatności
- Strony informacyjne

---

## 4. Struktura projektu
```txt
├├── account/ — panel konta użytkownika
│   ├── account-page.js — logika strony konta użytkownika
│   ├── account.css — style panelu konta
│   ├── account.html — główna strona konta użytkownika
│   ├── accounts.js — obsługa danych kont i autoryzacji
│   └── index.html — strona startowa sekcji account
│
├── cart/ — koszyk zakupowy
│   ├── cart.css — style koszyka
│   ├── cart.html — struktura strony koszyka
│   └── cart.js — logika dodawania/usuwania produktów
│
├── data/ — dane aplikacji
│   └── users.json — baza użytkowników w formacie JSON
│
├── img/ — folder z obrazami i grafikami projektu
│
├── main-page/ — strona główna aplikacji
│   ├── index.html — główna struktura strony startowej
│   ├── index.js — skrypty i interakcje strony głównej
│   └── style.css — style strony głównej
│
├── other-shi/ — dodatkowe strony informacyjne i pomocnicze
│   ├── contacts.css — style strony kontaktowej
│   ├── contacts.html — strona kontaktowa
│   ├── INTRO.css — style strony intro
│   ├── INTRO1.html — pierwsza strona wprowadzająca
│   ├── INTRO2.html — druga strona wprowadzająca
│   ├── privacy.css — style polityki prywatności
│   ├── privacy.html — strona polityki prywatności
│   ├── script.js — wspólne skrypty dla dodatkowych stron
│   ├── SHANDRET.css — style strony SHANDRET
│   ├── SHANDRET.html — dodatkowa strona informacyjna
│   ├── terms.css — style regulaminu
│   └── TERMS.HTML — strona regulaminu serwisu
│
├── product/ — sekcja produktu
│   ├── product.css — style strony produktu
│   ├── product.html — struktura strony produktu
│   └── product.js — logika obsługi produktów
│
├── sell/ — panel sprzedaży produktów
│   ├── index.html — główna strona sprzedaży
│   ├── script.js — logika dodawania i zarządzania ofertami
│   └── style.css — style panelu sprzedaży
│
├── banner.jpg — główny banner strony
├── banner2.jpg — dodatkowy banner/promocja
├── package.json — konfiguracja projektu Node.js i zależności
├── package-lock.json — zapis wersji zależności npm
├── README.md — dokumentacja projektu
└── server.js — główny plik serwera aplikacji
```
---

## 5. Użycie

### Strona główna
- Otwórz stronę główną sklepu z serwera node (w konsoli "node server.js"). (main-page/index.html) 
- Przeglądaj dostępne produkty.

### Konto użytkownika
- Zarejestruj konto lub zaloguj się.
- Zarządzaj swoim profilem.

### Produkty
- Kliknij produkt aby zobaczyć szczegóły.
- Dodaj produkt do koszyka.

### Koszyk
- Otwórz koszyk.
- Usuń produkty lub przejdź do zamówienia.

### Sprzedaż
- Dodawanie własnych produktów do sprzedaży.

---

## 6. Technologie i zależności

### Frontend
- HTML5
- CSS3
- JavaScript

### Backend
- Node.js

### Zależności
Instalowane przez:

npm install

---

## 7. Licencja

Projekt udostępniony na licencji MIT.

---

## 8. Link do kodu

GitHub:
[[https://github.com/nazwa_konta/nazwa_projektu](https://github.com/neolov/2AP_DZMITRY_MELEKH_PROJOPP_AP_e1)](https://github.com/neolov/2AP_DZMITRY_MELEKH_PROJOPP_AP_e1/tree/main)


