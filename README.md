# Screenshot Sorting Pro – Premium Landingpage

**Eine vollständige statische Landingpage in Blau/Cyan/Violett**, passend zu den zuvor gestalteten App-Bildern.

## Inhalt

- `index.html` – vollständige Landingpage mit Features, Anleitung, Screenshot-Galerie, FAQ und Kontakt-CTA
- `styles.css` – Premium-Design, Animationen, responsive Ansichten für Desktop/Tablet/Handy
- `script.js` – DE/EN-Sprachwechsel, mobile Navigation, Screenshot-Lightbox, Galerie, Scrollanimationen
- `config.js` – Google-Play-, APK- und E-Mail-Konfiguration
- `impressum.html` und `datenschutz.html` – **Vorlagen**, vor Veröffentlichung rechtlich und inhaltlich vervollständigen!
- `assets/img/` – weboptimierte Bilder und App-Icon
- `assets/originals/` – die ursprünglichen generierten App-Bilder, Galerie-Screenshots und Designreferenz
- `assets/branding/` – App-Icon mit 512×512 Pixeln und **blaue Google-Play-Vorstellungsgrafik mit 1024×500 Pixeln**

## Direkt starten

`index.html` im Browser öffnen. Für einen lokalen Testserver optional:

```bash
python -m http.server 8080
```

Danach `http://localhost:8080` aufrufen.

Es sind **keine npm-Pakete, keine externen Fonts, kein Framework und kein Build-Schritt** erforderlich.

## Auf GitHub Pages veröffentlichen

1. Ein neues Repository auf GitHub anlegen, z. B. `screenshot-sorting-pro-landing`.
2. Den **Inhalt dieses Ordners** hochladen, sodass `index.html` direkt im Repository-Hauptverzeichnis liegt.
3. Unter **Settings → Pages → Build and deployment** `Deploy from a branch` auswählen.
4. Branch `main`, Ordner `/ (root)`, speichern.
5. Nach kurzer Wartezeit unter der angezeigten GitHub-Pages-URL öffnen.

## Download-Links aktivieren

Die Google-Play-Verfügbarkeit wurde **nicht verifiziert**. Deshalb verlinkt die Landingpage standardmäßig auf die Screenshots bzw. bietet eine Kontakt-E-Mail statt eines möglicherweise defekten Download-Links.

In `config.js` die **tatsächlich gültigen** URLs hinterlegen:

```js
window.SSP_CONFIG = {
  playStoreUrl: 'https://play.google.com/store/apps/details?id=DEINE_TATSAECHLICHE_APPLICATION_ID',
  apkDownloadUrl: '',
  contactEmail: 'flondy.dev@gmail.com'
};
```

Nur `https://`-URLs werden als Download-Ziel verwendet. Bei gültigem Store-Link wechseln die beiden Hauptbuttons automatisch zur Google-Play-Verlinkung. Alternativ kann eine geprüfte APK-Download-URL eingetragen werden (z. B. ein eigener Release-Link). Ohne solche Links werden **keine falschen Downloadbuttons** vorgetäuscht.

## Wichtige Hinweise vor der Veröffentlichung

- Die fünf „Screenshots“ sind **zuvor generierte Marketing-/Designvisualisierungen**; sie sind keine gesichert originalen Aufnahmen des aktuellen Android-Builds. Die Website weist transparent darauf hin.
- Stelle in der Produktbeschreibung nur Funktionen dar, die der veröffentlichte Build wirklich unterstützt. Prüfe insbesondere Aussagen zur lokalen Bildverarbeitung und Datenschutz.
- `impressum.html` erfordert **vollständige ladungsfähige Anschrift und rechtlich erforderliche Angaben**.
- `datenschutz.html` ist eine **Website-Vorlage** und muss mit deiner Hosting- und Verarbeitungssituation abgeglichen werden. Sie ersetzt **nicht die Datenschutzerklärung für deine Android-App**.
- Google Play kann Anforderungen an Screenshots, Marken-/Logodarstellung und Store-Texte stellen. Bitte vor Einreichung prüfen.
- Die Bilddatei `assets/branding/Google_Play_Feature_Graphic_BLUE_1024x500.png` hat genau **1024×500 Pixel**; Uploadgröße ist unter 15 MB.

## Farben und Anpassung

Die wichtigsten CSS-Variablen stehen am Anfang der `styles.css`:

```css
--bg:#040817;
--blue:#357bff;
--cyan:#2fe3fc;
--purple:#8966ff;
```

Den Namen, die Features und die Übersetzungen kannst du in `index.html` bzw. `script.js` bearbeiten. Die `index.html` enthält bereits die deutsche Standardversion; `script.js` schaltet auf Englisch um.

## Technischer Datenschutz der Landingpage

Es gibt keinen externen CDN-Aufruf, keine Cookies und kein Analyse-Skript in den mitgelieferten Dateien. Die Sprachwahl wird im Browser mit `localStorage` gespeichert. Der gewählte Webhost kann eigene Server-/Zugriffslogs führen.
