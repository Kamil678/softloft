# Affueria — strona internetowa studia pilates

## Klientka i kontekst
Joanna Rzepka, studio pilates na reformerach, Kraków (Prądnik Biały, ul. Glogera 21).
Marka: nowoczesna, loftowa, przyjazna. Bez animacji i filmów.

## Stack technologiczny
- **Nuxt 4 (Vue 3)** + `nuxt generate` — pełny static, bez backendu
- **Tailwind CSS** — design tokens jako CSS variables (łatwa podmiana kolorów)
- **@nuxtjs/i18n** — skonfigurowany tylko pod `pl` na start, ale gotowy strukturalnie pod dodanie `en` w etapie II bez przebudowy routingu/komponentów
- **@nuxt/image** — optymalizacja zdjęć (na start wizualizacje AI, docelowo realne zdjęcia po ukończeniu studia)
- Brak CMS — treść w lokalnych plikach JSON/markdown w repo, aktualizowana ręcznie przez developera i redeployowana
- Brak formularza kontaktowego w etapie I — tylko mapa Google + dane kontaktowe
- Integracja Fitssey — osadzenie grafiku zajęć / link do rezerwacji (główny punkt konwersji)

## Zakres etapu I (potwierdzony na spotkaniu z klientką)
- **1 lokalizacja** (nie 2, jak w pierwotnym briefie/ofercie)
- **Tylko wersja PL** (EN przesunięte do etapu II)
- **Bez formularza kontaktowego** (przesunięty do etapu II)
- Modal ze szczegółami zajęć (nazwa zajęć + przycisk „szczegóły" otwierający modal)
- Modal na promocje
- Sekcja „Współpraca" — loga partnerów + nazwy + linki po kliknięciu w logo
- Sekcja „Opinie" — z Google, limit 5 opinii
- Info pod mapą: parking + supermarkety w okolicy
- W sekcji trenerzy: info że studio szuka trenerów (dopóki kadra nie jest skompletowana)
- Strona „coming soon" przed pełnym wdrożeniem — z kontaktem i adresem

## Struktura strony (7 podstron)
1. Strona główna — hero, CTA „Zarezerwuj zajęcia"
2. O studio — styl, historia, profile instruktorów
3. Oferta — zajęcia, cennik, karnety
4. Zapisy — grafik Fitssey (najważniejszy punkt konwersji, wyróżniony wizualnie)
5. Opinie — z Google (limit 5)
6. Współpraca — partnerzy, dostawca reformerów
7. Kontakt — adres, mapa, godziny, dane

## Kolorystyka (WAŻNE — w trakcie zmiany)
Pierwotna paleta (burgund #7A0F2E + ecru/taupe/grafit) jest **nieaktualna**.
Na spotkaniu ustalono nowy kierunek:
- Tło: biel
- Menu górne: czarne lub grafitowe, logo białe
- Stopka: czarna, białe napisy
- Przyciski: złote (dokładny kod koloru + fonty klientka prześle na podstawie swojego logo — **na razie placeholder**, wszystkie kolory jako CSS variables żeby podmiana była jednolinijkowa)

## Treści — status dostarczenia
| Element | Status |
|---|---|
| Logo (wektor/PNG) | będzie dostarczone |
| Teksty PL | w trakcie przygotowania przez klientkę |
| Zdjęcia | na start wizualizacje AI, docelowo realne |
| Dostęp do Fitssey | wkrótce |
| Cennik (próbne / karnet 4 / karnet 8) | do potwierdzenia, może być później |
| Dane instruktorów | później, ale przygotować miejsce w strukturze |
| Materiały do sekcji współpraca | do ustalenia |

Ceny konkurencji dla orientacji: jednorazowe 150–200 zł, karnet 4: 440–550 zł, karnet 8: 750–800 zł.

## Terminy i budżet
- Termin realizacji: 6 tygodni od akceptacji i materiałów, cel sierpień/wrzesień 2026
- Cena: **do ostatecznego potwierdzenia z klientką** — w dokumentach widnieją dwie kwoty (3400 zł netto w briefingu vs 3700 zł netto w pierwotnej ofercie), zakres etapu I został od tego czasu zawężony (1 lokalizacja zamiast 2, bez EN, bez formularza)
- Płatność: 50% zaliczka / 50% po wdrożeniu
- 30 dni bezpłatnego wsparcia po starcie

## Domena i hosting
Klientka wybiera i zakłada samodzielnie (nie w zakresie dewelopera).

## Dane kontaktowe developera
Kamil Pigulak • kamilpigulak@gmail.com • 518-144-228