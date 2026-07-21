# BioSiker – Claude Code irányelvek

## Branch-szabályok
- MINDIG a `claude-work` branch-en dolgozz, soha ne commitolj/push-olj közvetlenül a `main`-re.
- Minden módosítás után: `git add -A && git commit -m "..." && git push`
- SOHA ne futtass `git push --force`-ot a main-re.
- SOHA ne merge-eld magad a PR-t – ez mindig emberi jóváhagyással történik.

## Minőségbiztosítás minden commit előtt
- `npm run build` – hibátlanul le kell futnia
- `npm run lint` – nem lehet ÚJ hiba a módosított fájlokban
- Ha van teszt-szkript a szószám/glossary-ellenőrzésre, azt is futtasd le

## Tartalmi szabályok
- A tananyag célja: magyar Biológia Érettségi (közép + emelt szint)
- Ne keverj bele irreleváns egyetemi anyagot (csak max. 1 mondatos érdekességként)
- Minden fejezetnél ellenőrizd a duplikátumokat a meglévő tartalommal

## Commit üzenetek formátuma
Rövid, magyar nyelvű, leíró jellegű, pl.:
"Egysejtű eukarióták fejezet közép szint hozzáadva"
