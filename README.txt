POSTING LOG (installable app)

1. Put it online (free, one time)
   - On github.com create a new repository called posting-log (public is fine; your log is NOT stored in it).
   - Click "Add file" > "Upload files" and drop in everything from this folder:
     index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, icon-maskable-512.png
   - Repository Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root). Save.
   - After a minute your app is at https://YOUR-USERNAME.github.io/posting-log/

2. Install it
   - Phone (Chrome): open the address, menu (3 dots) > "Install app" / "Add to Home screen".
   - Laptop (Chrome or Edge): click the install icon at the right of the address bar.
   After the first visit it also opens with no internet.

3. Turn on sync (do this on each device)
   - GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic) > Generate new token.
   - Tick only "gist". Copy the token.
   - In the app, scroll to "Sync between devices", paste the token, press Connect.
   - Use the same token on your phone and laptop. Your log is kept in a private gist on your account.
   - Treat the token like a password. If it leaks, delete it on GitHub and make a new one.

Notes
   - Cases tab: each case you log opens as a full case history report. You can print it or save it as a PDF from there.
   - Nothing is deleted automatically. A deleted class or case goes to Recently deleted (History tab) and can be restored.
   - If you already installed the previous version, upload the new files over the old ones in your repository. The app updates itself next time you open it online.
   - Works offline; changes sync when you are back online.
   - Edits merge per class, newest edit wins. If you edit the same class on both devices while offline, the later edit is kept.
   - "Save backup" / "Restore backup" at the bottom make a spare copy. Backups from the Claude-hosted version also restore here.
