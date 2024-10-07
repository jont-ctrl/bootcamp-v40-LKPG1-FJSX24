# Uppstart/Planering
Vi har börjat med att alla gör sin egen branch på Github.

**Kommentar**:  
Det började lite rackigt med problem att skapa sin egen branch men efter många om och men så fick vi det att funka.  
Vi bestämde oss för att göra en spelwebbshop!

**Namn**: GamerKatedralen

## Uppstart och delegering
Simon är SCRUM-Master. Uppdelningen av vem som skulle göra vad lade vi fram som så att man fick ta arbetet som man kände sig att man ville göra.

### Möte 1
Vi bestämde oss för att göra en spelshop med följande: 

- **Aktivitetssida**: För evenemang och liknande.
- **Handelssida**: Där du köper eller kan se över spelutbudet.
- **Kundvagn**: Utcheckning av produkter innan betalning.
- **Frontpage**: Framsidan på webbplatsen som vi skapar.
- **Kontaktsida**: Information om hur man når oss exempelvis.
- **Main CSS, Header och Footer**: Till för att knyta an alla filer så hemsidan följer ett tema (knappar, färger och kontrast som följer Lighthouse).

Vi har även delegerat upp arbetet så samtliga har en sprint/to do på Trello. Där kan man följa sprints och få information om hur läget ser ut hos alla, och även när koden är klar kan den bli review:ad av oss medlemmar innan merge.

### Möte 2
Vi börjar med att se över hur det går för alla. För alla verkar det gå bra och vi bestämde oss för att fortsätta arbetet med en stand-up efter 1 timmas arbete. Eftersom det än så länge inte var några frågetecken eller hick-ups fortsatte vi.

### Mellan Möte 2 och 3
Jonatan ordnade en checklist från *boiler-room-dokumentet* för att vi enkelt ska kunna bocka av alla punkter som behövs och liknande.

### Möte 3
Vi har gått igenom hur det går för alla och om någon stött på något problem. Gaston behövde lite hjälp med Github. Vi hjälptes åt och löste problemet; vi visade hur man pushade till Github från lokalt. Vi delegerade även ut arbete till varandra om hen var klar med sitt arbete. Elin fick börja med main CSS-filen för styling på alla sidor.

### Möte 4
Vi diskuterade hur vi ska lägga upp presentationen och såg över repot efter eventuella fel och ändringar vi ville göra. Nu har vi justerat lite kod eftersom Github strulade i fredags. Vi hjälpte Elin att klona repot.

---

## Överblick AI och Github

### AI
**Nackdelar**:  
Det vi uppmärksammat med att jobba med AI är att ibland kan det bli ett spel med “whack-a-mole”. Du kan göra små förändringar som sedan AI-verktyget kan ändra i kod om du inte är uppmärksam. Den löser en bugg och skapar en annan om man inte granskar koden. Vi har märkt fler gånger att den kan skapa en ny funktion som ser korrekt ut, bara för att en annan funktion “går sönder”. 

**Fördelar**:  
Det går otroligt snabbt att skapa en hemsida/skriva kod. Oftast när man fastnar på en idé eller ett problem kan man alltid fråga efter lösningar. Man kan också “bolla idéer” med AI samt få exempel som kan hjälpa dig.

### Github
Vi började med att göra ett repo, alla gjorde varsin branch med olika HTML-, CSS- och JS-filer. Till en början när vi committade hade vi inget strul, och när vi mergade de 3 första gångerna gick allt bra, tills vår 4:e merge så försvann kod ur repot, dvs. vissa filer verkade helt försvinna. 

Efter det gjorde vi ett nytt repo med alla filer, genom att gå tillbaka i historiken på Github och fick det att funka. Till sist gick vi tillbaka till det gamla repot och justerade så att all kod blev korrekt, och nu måndag 07-10 har vi inte haft några problem.

**Fördelar**:  
Man kan gå tillbaka i historiken om problem uppstår, och när det funkar är det ett otroligt starkt verktyg.

**Nackdelar**:  
Ibland vill inte Github uppdateras lokalt och kan orsaka strul. Ska man till exempel merge:a en fil som redan finns kan det bli konflikt. Problemen är *user error*, eftersom vi inte är tillräckligt erfarna än.
