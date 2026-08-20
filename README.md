# Il Taccuino di Hobbes Crowe

Sito statico per il diario investigativo di Hobbes Crowe, personaggio di One Piece GDR: New World.

## Struttura

```text
index.html
assets/
  css/
    style.css
  js/
    app.js
```

## Avvio locale

Apri `index.html` in un browser. Non richiede dipendenze, build o server.

## Pubblicazione con GitHub Pages

1. Apri **Settings** del repository.
2. Vai in **Pages**.
3. In **Build and deployment**, scegli **Deploy from a branch**.
4. Seleziona il branch `main` e la cartella `/(root)`.
5. Salva: GitHub genererà l'URL pubblico del sito.

## Aggiornare il diario

Le voci sono nella sezione `#diario` di `index.html`. Per aggiungere una nuova giocata, duplica un blocco `<article class="entry">` e aggiorna numero, titolo, data, testo, conseguenze e tag.
