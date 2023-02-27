# SoftwareEngineering
# Nexus Web App
---
## Setup
1. run `npm install` in a terminal window at the top level directory (this will install all the dependancies for you)
2. run `npm run dev` if you want the dev environment that automatically relaunches the webpage when things are changed. Right now the port is `localhost:5000`
3. run `npm run start` if you want to just run the app normally

## Dependencies
- Express (For the framework)
- Express Session (Stores a user session, which makes it possible to track who is currently logged in. Also part of authentication. Only users with correct role are able to access certain webpages)
- ejs (View engine \**makes variables in html usable*\*)
- mongoose (this is for interacting with mongoDB. I think it could be useful to switch to this database because we can host up to half a gigabyte online without paying anything. We could then run the main website off of something like AWS for students and wouldn't have to worry about going over storage)
- bcrypt (Allowing hashing of passwords that are stored on the mongoDB database. Also checks passowords against database when loggin in -- **Extreemly important and is the backbone of the login system**)
- dotenv (Industry standard for declaring useful info for environments \**ex. dev prod*\*. Currently not used for much and is not that important)
- nodemon (\**Just for dev environment*\* Automatically relaunches the server whenever something is changed. Will make it a lot easier for the frontend team to edit things if the webpage is constantly updating automatically. **You must use `npm run dev` for nodemon to work**
