# Copilot in Excel: meer uit je data halen

> **Excel is krachtig, maar veel medewerkers gebruiken maar een fractie van wat het kan. Copilot helpt je om formules te schrijven, data te analyseren en inzichten te vinden — zonder dat je een Excel-expert hoeft te zijn.**

---

## Wat kan Copilot in Excel?

| Functie | Wat het doet |
|---|---|
| **Formules genereren** | Schrijft complexe formules op basis van een beschrijving in gewone taal |
| **Formules uitleggen** | Legt uit wat een bestaande formule doet, stap voor stap |
| **Data analyseren** | Vindt patronen, uitschieters en trends in je data |
| **Visualisaties maken** | Stelt grafieken voor die passen bij jouw data |
| **Kolommen toevoegen** | Voegt berekende kolommen toe op basis van jouw instructies |
| **Data opschonen** | Vindt inconsistenties, dubbels en fouten in je dataset |

!!! info "Vereiste: data als tabel"
    Copilot in Excel werkt het best als je data is opgemaakt als een **officiële Excel-tabel** (Invoegen → Tabel). Zo herkent Copilot de structuur van je data correct. Zorg ook dat je kolomkoppen duidelijk en beschrijvend zijn.

---

## 1. Formules genereren

Je weet wat je wilt berekenen, maar niet hoe je de formule schrijft. Beschrijf het in gewone taal en Copilot schrijft de formule voor je.

**Hoe:** Open je Excel-bestand met Copilot → typ je vraag in het Copilot-paneel.

**Voorbeelden:**

> *"Voeg een kolom toe die de totale kostprijs berekent: het aantal uit kolom C vermenigvuldigd met de eenheidsprijs uit kolom D, inclusief 21% BTW."*

> *"Maak een formule die de gemiddelde verwerkingstijd berekent voor alleen de dossiers met status 'Afgesloten' in kolom E."*

> *"Schrijf een formule die automatisch 'Actie vereist' toont als de vervaldatum in kolom F meer dan 30 dagen geleden is."*

**Formules laten uitleggen:**

> *"Leg me uit wat deze formule doet: =SUMIFS(D2:D100,C2:C100,"Goedgekeurd",B2:B100,"Q1")"*

Copilot zet de formule om in begrijpelijke taal, stap voor stap.

---

## 2. Data analyseren en inzichten vinden

Je hebt een grote dataset maar weet niet waar je moet beginnen. Copilot scant de data en wijst je op opvallende patronen, uitschieters en trends.

**Hoe:** Open je tabel → open Copilot → stel een gerichte vraag.

**Voorbeelden voor stadswerk:**

> *"Analyseer deze tabel met vergunningsaanvragen. Welke dienst heeft de meeste aanvragen ingediend in het eerste kwartaal?"*

> *"Zijn er rijen in deze dataset die opvallen als mogelijke fouten of uitschieters?"*

> *"Welke categorie van klachten komt het vaakst voor in kolom B?"*

> *"Vergelijk de uitgaven van dit jaar met vorig jaar. Waar zijn de grootste verschillen?"*

---

## 3. Grafieken en visualisaties maken

Een grafiek zegt meer dan een tabel vol cijfers. Copilot stelt het meest geschikte grafiektype voor en maakt het voor je aan.

**Hoe:** Selecteer je data → open Copilot → vraag een visualisatie.

**Voorbeelden:**

> *"Maak een staafdiagram dat de verdeling van klachten per stadsdienst toont voor het afgelopen jaar."*

> *"Visualiseer de evolutie van het aantal inschrijvingen per maand als een lijndiagram."*

> *"Maak een cirkeldiagram dat toont welk percentage van het budget per dienst is gebruikt."*

---

## 4. Kolommen toevoegen en data verrijken

Je wilt je dataset uitbreiden met berekende of gecategoriseerde kolommen, zonder zelf formules te typen.

**Voorbeelden:**

> *"Voeg een kolom 'Kwartaal' toe die automatisch het kwartaal bepaalt op basis van de datum in kolom A."*

> *"Voeg een kolom toe die 'Binnen termijn' of 'Overschreden' toont, afhankelijk van of de afhandelingsdatum in kolom D voor of na de deadline in kolom E ligt."*

> *"Categoriseer de bedragen in kolom C als 'Klein' (onder 1000€), 'Middelgroot' (1000–10.000€) of 'Groot' (boven 10.000€)."*

---

## 5. Data opschonen

Een lijst geïmporteerd uit een ander systeem zit vaak vol inconsistenties: spaties, variabele schrijfwijzen, dubbele rijen. Copilot helpt je die snel te vinden en te corrigeren.

**Voorbeelden:**

> *"Zoek dubbele rijen in deze tabel op basis van kolom A en B samen."*

> *"Zijn er cellen in kolom C die geen geldig e-mailadres bevatten?"*

> *"Maak alle waarden in kolom D consistent: verwijder overtollige spaties en zet alles in kleine letters."*

---

## Praktijkscenario's voor stadswerk

| Situatie | Wat je vraagt aan Copilot |
|---|---|
| Budgetopvolging | *"Toon welke kostenposten meer dan 10% boven budget zitten."* |
| Personeelsplanning | *"Hoeveel verlofdagen zijn er per medewerker opgenomen dit jaar?"* |
| Evenementregistraties | *"Welke activiteit heeft de meeste inschrijvingen? Toon per leeftijdscategorie."* |
| Klachtenopvolging | *"Hoeveel klachten staan langer dan 14 dagen open?"* |
| Subsidiedossiers | *"Wat is het totaal toegekende subsidiebedrag per categorie dit jaar?"* |

---

## Overzicht: handige prompts voor Excel

| Situatie | Prompt |
|---|---|
| Formule schrijven | *"Schrijf een formule die [berekening] doet op basis van kolom X en Y."* |
| Formule begrijpen | *"Leg me uit wat deze formule doet: [formule]"* |
| Data analyseren | *"Welke trends of uitschieters zie je in deze data?"* |
| Grafiek maken | *"Maak een [type] grafiek die [wat] toont."* |
| Kolom toevoegen | *"Voeg een kolom toe die [berekening of categorie] weergeeft."* |
| Data opschonen | *"Zoek dubbels en inconsistenties in kolom X."* |

---

!!! tip "Voor ambassadeurs: formules uitleggen als instapper 🦸"
    Veel medewerkers zijn geen Excel-expert maar werken wel dagelijks met spreadsheets vol formules die ze niet begrijpen. Laat ze een formule selecteren en aan Copilot vragen *"Wat doet deze formule?"* — dat levert meteen een concreet, begrijpelijk antwoord. Een veilige, laagdrempelige eerste stap die vertrouwen opbouwt.
