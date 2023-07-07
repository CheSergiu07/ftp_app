# Aplicația FTP

Aceasta este o aplicație FTP construită folosind Node.js, Passport.js, Bcrypt, Mongoose, UUID, jsftp, și React.js. Aplicația încarcă un fișier PDF pe un server FTP, generează o cheie unică și stochează acea cheie în baza de date MongoDB.

## Dependințe

- Node.js
- MongoDB
- Un server FTP (ex. FileZilla Server pentru Windows)
- React.js

## Instalare

Pentru a instala această aplicație, urmați pașii de mai jos:

1. Clonează depozitul în directorul tău preferat:

    ```bash
    git clone https://github.com/CheSergiu07/ftp_app.git
    ```

2. Navigați în directorul client și instalați dependințele:

    ```bash
    cd proiect_ftp/client
    npm install
    ```

3. Navigați în directorul server și instalați dependințele:

    ```bash
    cd ../server
    npm install
    ```

## Configurare

1. Configurare server FTP: După ce ați instalat serverul FTP de preferință, configurați-l cu un utilizator și o parolă.

2. Configurare MongoDB: Instalați și configurați MongoDB local sau utilizați un serviciu de hosting ca MongoDB Atlas. După ce aveți configurată instanța MongoDB, notați șirul de conectare.

3. Configurare aplicație: Deschideți fișierul `server/src/config/mongodb.config.js` și înlocuiți șirul de conectare cu cel al instanței dvs. MongoDB. Apoi, deschideți fișierul `server/src/config/ftp.config.js` și înlocuiți detaliile utilizatorului FTP cu cele ale serverului dvs.

## Rulare

1. Pentru a rula serverul, navigați în directorul `server` și executați comanda:

    ```bash
    node src/server.js
    ```

2. Pentru a rula clientul, navigați în directorul `client` și executați comanda:

    ```bash
    npm start
    ```

Acum, serverul ar trebui să ruleze pe portul 5000, iar clientul pe portul 3000. Navigați la `http://localhost:3000` în browserul dvs. pentru a accesa aplicația.

## Utilizare

Încărcați un fișier PDF prin interfața de încărcare a fișierelor. După încărcare, o cheie unică va fi generată și afișată. Această cheie este stocată în baza de date MongoDB și poate fi utilizată pentru a descărca fișierul la o dată ulterioară.

Notă: Această aplicație este doar un exemplu și nu ar trebui utilizată în producție fără a adăuga măsuri suplimentare de securitate.

## START APP

You shouldn't run the node client\src\App.js command to start your React app. This is because React and many modern JavaScript projects often use ES6 module syntax, and Node.js by default does not support ES6 import/export syntax out of the box.

To start your React application, navigate to the client directory and then use the npm start command. Your command line steps should look like this:

PS C:\Users\sergi\FTP_CHE\proiect_ftp\ftp_app> cd client
PS C:\Users\sergi\FTP_CHE\proiect_ftp\ftp_app\client> npm start

