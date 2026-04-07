# Troubleshooting & Hallucinaties

Soms geeft Copilot een antwoord dat compleet nutteloos is, of erger nog: feitelijk onjuist. We noemen dit **hallucineren**. Om collega's te helpen, moet je begrijpen waarom dit gebeurt en hoe je het oplost.

## Waarom hallucineert AI?
Copilot is in de basis een geavanceerde 'woord-voorspeller'. Het zoekt niet zomaar tekst op in een database, maar berekent welk woord statistisch gezien het meest logisch volgt op het vorige woord, op basis van de context. Als de context (de prompt) vaag is, gaat het systeem zelf "creatief" gokken om toch een logisch klinkend antwoord te geven.

## Eerste hulp bij slechte antwoorden

Wanneer een collega gefrustreerd is over een antwoord, gebruik dan deze drie reparatie-technieken:

### 1. Beperk de vrijheid (Kaders stellen)
Als Copilot te veel fantaseert, moet je de grens strenger afbakenen.
* *Probleem:* Copilot verzint zelf beleidsregels.
* *Oplossing:* Voeg aan de prompt toe: *"Baseer je UITSLUITEND op de tekst die ik je hieronder geef. Als het antwoord niet in de tekst staat, zeg dan 'Informatie ontbreekt'."*

### 2. 'Few-Shot' Prompting (Geef een voorbeeld)
Soms begrijpt Copilot de gewenste 'toon' of opmaak niet. Geef in je prompt één goed voorbeeld mee.
* *Oplossing:* Voeg aan de prompt toe: *"Maak een samenvatting in deze exacte stijl: [Plak hier een voorbeeld van een oude, goede samenvatting]."*

### 3. Ketting-prompts (Stap voor stap)
Grote taken in één keer vragen, leidt vaak tot chaos. Splits het op.
* *Oplossing:* Vraag eerst: *"Analyseer dit document en geef me de 3 hoofdthema's."* Wacht op het antwoord, en vraag dán pas: *"Schrijf nu voor thema 1 een korte e-mail."*