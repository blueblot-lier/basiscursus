# Gevorderd gebruik: haal alles uit Copilot

> **Je kent het S.T.A.R.T.-framework, je gebruikt Copilot dagelijks en je wil verder dan de basis. Deze module leert je technieken waarmee je uren werk bespaart, complexe taken aanpakt en Copilot echt als een volwaardige werkpartner inzet.**

---

## Overzicht van gevorderde technieken

| Techniek | Wat het oplevert |
|---|---|
| **Werken met eigen documenten** | Copilot analyseert en vergelijkt jouw interne bestanden |
| **Persona's en rollen toewijzen** | Scherper, consistenter resultaat door een vaste rol mee te geven |
| **Iteratief prompten** | Van een goed naar een uitstekend antwoord via gerichte bijsturing |
| **Prompt chaining** | Complexe taken opdelen in logische stappen voor beter resultaat |
| **Templates en workflows bouwen** | Succesprompts herbruikbaar maken voor jezelf en collega's |
| **Meerdere documenten vergelijken** | Inzichten halen uit verschillende bronnen tegelijk |
| **Output structureren voor hergebruik** | Resultaten direct klaar maken voor een specifieke bestemming |

---

## 1. Werken met eigen documenten

Copilot wordt pas écht krachtig als je het koppelt aan jouw eigen stadsdocumenten. In plaats van algemene kennis gebruikt het dan de concrete inhoud van jouw bestanden.

**Hoe:** Typ in de Copilot-chat een schuine streep (`/`) gevolgd door de documentnaam, of klik op het paperclip-icoontje om een bestand toe te voegen.

**Wat je ermee kunt:**

> *"Analyseer het document [Jaarrapport 2024] en geef me de vijf belangrijkste conclusies."*

> *"Vergelijk de begroting in [Budget 2024] met de werkelijke uitgaven in [Jaarrekening 2024]. Waar zijn de grootste afwijkingen?"*

> *"Op basis van [Mobiliteitsplan 2023-2028]: welke acties zijn gepland voor het stadscentrum en wat is de status ervan?"*

> *"Lees [Reglement subsidies verenigingen] en geef me een checklist die ik kan gebruiken bij het beoordelen van een nieuwe aanvraag."*

!!! warning "Documentgrootte en privacy"
    Copilot kan grote documenten verwerken, maar werkt het nauwkeurigst met documenten onder 50 pagina's. Bij zeer lange documenten: werk in secties of vraag naar een specifiek hoofdstuk. Voeg nooit documenten toe die persoonsgegevens van burgers bevatten — zie [Privacy & GDPR](../veiligheid/privacy.md).

---

## 2. Meerdere documenten vergelijken

Een van de krachtigste gevorderde toepassingen: Copilot laat tegelijk twee of meer documenten analyseren en de verschillen of overeenkomsten eruit halen.

**Voorbeelden:**

> *"Vergelijk [Bestek 2023] met [Bestek 2024]. Welke voorwaarden zijn gewijzigd en wat zijn de nieuwe clausules?"*

> *"Lees de verslagen van de laatste drie wijkvergaderingen [document 1, 2, 3]. Welke klachten of thema's komen telkens terug?"*

> *"Analyseer [Voorstel leverancier A] en [Voorstel leverancier B] op basis van prijs, levertermijn en garantievoorwaarden. Zet de vergelijking in een tabel."*

---

## 3. Een persona of rol toewijzen

Door Copilot een specifieke rol te geven, stuur je de toon, het perspectief en het detailniveau van het antwoord veel preciezer dan met alleen een taakbeschrijving.

**Hoe het werkt:**

Begin je prompt met een expliciete rolbeschrijving:

> *"Je bent een ervaren jurist gespecialiseerd in Belgisch bestuursrecht. Analyseer het onderstaande reglement op mogelijke juridische knelpunten..."*

> *"Je bent een senior communicatieadviseur bij een Vlaams lokaal bestuur. Beoordeel de onderstaande bewonersbrief op toon, leesbaarheid en effectiviteit..."*

> *"Je bent een kritische schepen die dit beleidsvoorstel voor het eerst leest. Welke vragen zou je stellen? Waar zie je zwakke punten?"*

**Waarom dit werkt:**

Een rol geeft Copilot een duidelijk referentiekader. Het antwoord is concreter, consistenter en beter afgestemd op het niveau en de verwachtingen van de echte ontvanger.

**Combineer met S.T.A.R.T.:**

De rol hoort in de **S** (Situatie) van je prompt — zo integreert het naadloos in het framework dat je al kent.

---

## 4. Iteratief prompten: van goed naar uitstekend

Neem nooit zomaar genoegen met het eerste antwoord. De kracht van Copilot zit in de dialoog. Behandel het als een brainstormsessie waarbij je telkens bijstuurt.

**Gouden regels voor iteratie:**

- **Bouw verder** op wat goed is: *"De structuur klopt, maar de toon is te formeel. Herschrijf enkel de eerste alinea warmer."*
- **Wees specifiek** over wat niet klopt: niet *"dit is niet goed"* maar *"de tweede alinea herhaalt wat al in de inleiding staat — schrap die herhaling."*
- **Vraag om alternatieven:** *"Geef me drie verschillende versies van de openingszin. Eén formeel, één vriendelijk, één prikkelend."*
- **Test grenzen:** *"Wat als we dit vanuit het perspectief van de burger schrijven in plaats van vanuit de stad?"*

**Voorbeeld van een iteratiecyclus:**

```
Ronde 1: Genereer eerste versie bewonersbrief
Ronde 2: "Goed, maar te lang. Kort in tot 200 woorden."
Ronde 3: "De toon is nu te koel. Voeg een empathische openingszin toe."
Ronde 4: "Vervang de laatste alinea door een concrete call-to-action."
Resultaat: Een brief die precies doet wat je wil.
```

---

## 5. Prompt chaining: complexe taken opdelen

De meest gemaakte fout bij gevorderde taken is alles in één gigantische prompt proppen. Copilot raakt daardoor in de war en levert een middelmatig resultaat op alles tegelijk in plaats van een uitstekend resultaat per onderdeel.

**De oplossing: hak de taak op in logische stappen.**

### Voorbeeld: beleidsrapport schrijven

**Stap 1 — Analyseren:**
> *"Lees de drie bijgevoegde wijkvergaderverslagen. Identificeer de vier meest genoemde problemen van bewoners. Geef per probleem een korte samenvatting en het aantal keer dat het vermeld werd."*

**Stap 2 — Prioriteren:**
> *"Rangschik deze vier problemen op basis van: hoe vaak ze voorkomen, hoe urgent ze zijn en hoe haalbaar een oplossing is voor een lokaal bestuur. Motiveer je rangschikking."*

**Stap 3 — Oplossingen uitwerken:**
> *"Werk voor het hoogst gerangschikte probleem drie concrete oplossingsopties uit. Geef per optie: beschrijving, geschatte kostprijs, uitvoeringstermijn en mogelijke knelpunten."*

**Stap 4 — Communiceren:**
> *"Schrijf een formele nota aan de schepen Openbare Werken met de samenvatting van de analyse, de geprioriteerde problemen en de drie oplossingsopties voor het grootste knelpunt."*

---

### Voorbeeld: complexe subsidieaanvraag beoordelen

**Stap 1:** *"Lees [subsidieaanvraag]. Geef een overzicht van: wat de aanvrager vraagt, voor welk bedrag en met welke motivering."*

**Stap 2:** *"Vergelijk nu de aanvraag met [subsidiereglement]. Voldoet de aanvraag aan alle voorwaarden? Geef per voorwaarde aan of die voldaan is of niet."*

**Stap 3:** *"Schrijf een gemotiveerd advies voor het college: goedkeuring, gedeeltelijke goedkeuring of weigering — met onderbouwing."*

---

## 6. Templates en workflows bouwen

Heb je na wat experimenteren de perfecte prompt gevonden voor een wekelijkse of maandelijkse taak? Sla hem op als template.

**Hoe:**

1. Maak een Word-document of OneNote-pagina aan met de titel **"Mijn Prompttemplates"**
2. Gebruik het S.T.A.R.T.-format als vaste structuur
3. Vervang specifieke inhoud door variabelen tussen `[haakjes]`
4. Sla het op op een plek die jij én je collega's kunnen bereiken

**Voorbeeld van een herbruikbare template:**

```
TEMPLATE: Maandelijks teamverslag

S: Ik ben [functie] bij [team] van de stad Lier en schrijf het maandelijks verslag.
T: Vat de onderstaande activiteiten en cijfers samen in een beknopt teamverslag.
A: Focus op: uitgevoerde taken, afwijkingen ten opzichte van de planning, 
   opvallende gebeurtenissen en actiepunten voor volgende maand. 
   Gebruik de data exact zoals opgegeven — verzin niets bij.
R: Gestructureerd verslag met vaste rubrieken: Activiteiten | Cijfers | 
   Bijzonderheden | Actiepunten. Maximaal 1 pagina.
T: Zakelijk en feitelijk.

[PLAK HIER DE RUWE DATA EN AANTEKENINGEN]
```

**Voeg je beste templates toe aan de [Promptbibliotheek op SharePoint](../ondersteuning.md)** — zo worden jouw oplossingen het vertrekpunt voor je collega's.

---

## 7. Output structureren voor hergebruik

Als je weet waar de output naartoe gaat, kun je Copilot vragen om hem direct in het juiste formaat te leveren — klaar voor gebruik zonder extra bewerkingsstap.

**Voorbeelden:**

> *"Geef de output als een tabel die ik direct in Word kan kopiëren, met kolommen: Actie | Verantwoordelijke | Deadline | Status."*

> *"Lever de samenvatting in het formaat van een e-mail met onderwerpregel, aanhef en afsluiting. Klaar om te versturen."*

> *"Schrijf de conclusies als vijf afzonderlijke bulletpoints die ik kan kopiëren naar een PowerPoint-slide."*

> *"Geef het advies in twee versies: één voor intern gebruik (technisch, volledig) en één voor de website (toegankelijk, B1-niveau)."*

---

## 8. Kwaliteitscontrole op expertniveau

Hoe meer je Copilot gebruikt, hoe meer je leert wanneer het wél en niet te vertrouwen is. Experts hanteren een scherper controleprotocol.

**Rode vlaggen die altijd extra controle vragen:**

| Signaal | Wat je doet |
|---|---|
| Specifieke data, cijfers of bedragen | Verifieer altijd via de originele bron |
| Namen van personen of organisaties | Controleer of ze bestaan en correct gespeld zijn |
| Verwijzingen naar wetgeving of decreten | Zoek het artikel op in de officiële bron |
| Citaten of quotes | Copilot verzint citaten — gebruik ze nooit zonder verificatie |
| Antwoorden die te vlot en compleet klinken | Juist díé antwoorden verdienen extra argwaan |

**Stel Copilot ook zelf kritische vragen:**

> *"Ben je zeker van deze informatie? Waar is dit op gebaseerd?"*

> *"Zijn er alternatieve interpretaties mogelijk voor deze situatie?"*

> *"Wat zijn de zwakke punten of risico's van het voorstel dat je zojuist beschreven hebt?"*

---

!!! tip "Voor ambassadeurs: geef een live chaining-demo 🦸"
    De meest overtuigende manier om gevorderd gebruik te demonstreren is een **live prompt chain** uitvoeren op een echt dossier — bijvoorbeeld een wijkvergaderverslag omzetten naar een beleidsadvies in vier stappen. Laat de collega's elke stap zien en becommentarieer wat je doet en waarom. Dat maakt het tastbaar en reproduceerbaar.

!!! tip "Voor ambassadeurs: bouw een gedeelde templatebibliotheek op 🦸"
    Eén goed uitgewerkte template per team is genoeg om tien collega's meteen productiever te maken. Plan een kort werkmoment met de enthousiaste gebruikers van elke afdeling, schrijf samen de beste prompts op, en laad ze op in de [Promptbibliotheek](../ondersteuning.md). Dat is de hefboom die het meeste effect heeft op de langere termijn.
