# BioSiker

BioSiker egy AI-alapú biológia tanulási platform magyar középiskolásoknak, akik a Biológia Érettségire készülnek. A cél a legjobb magyar biológia-tanulási élmény felépítése: adaptív, gamifikált, AI-vezérelt tanulás — nem egy újabb generikus kvízoldal.

## Tech stack

- **React 19** + **Vite** — frontend build
- **Tailwind CSS** — styling
- **Framer Motion** — animációk
- **React Router** — routing
- **Vercel** — deploy

## Fejlesztés indítása

```bash
npm install
npm run dev
```

Az alkalmazás alapértelmezetten a `http://localhost:5176` címen fut.

## Build

```bash
npm run build
npm run preview
```

## Projekt struktúra

```
src/
  components/   # Újrahasználható UI komponensek (Layout, Navbar, stb.)
  context/      # React Context providerek (pl. ThemeContext)
  pages/        # Route-szintű oldalak
  assets/       # Statikus képek
```

## Jelenlegi állapot

A projekt jelenleg egy frontend UI-váz: a felület kész és reszponzív, de valódi backend, AI-integráció és adatperzisztencia még nincs bekötve. Ez a fejlesztés soron következő fő iránya.

## Fontos: nincs backend

Jelenleg **nincs API réteg, adatbázis vagy autentikáció** — a Login/Register formok, a kvíz-generálás és a felhasználói progressz mind mock/placeholder állapotban vannak. Ezt tudatosan, lépésről lépésre építjük ki.
