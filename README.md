# Basic Scientific Skill course
This repository has both the frontend and the backend of a simple website
that was made to perform a experiment on the reaction times.
# How to run
## Backend
To run the backend first install npm and install all the needed packages with `npm install` from the backend folder.
After this run `node api.js` from the backend and everything should be good and running.
The default port is `3001`
## Frontend
For the frontend install the needed packages with `npm install` from the frontend folder.
Then run `npm start` this will run the dev version of the frontend.
The default port is `3000` on localhost.
The connection to the backend is made through localhost. If you have the backend somewhere else (most of the time) than change the variable `ip` in the `frontend/src/comp/experiment/expe.js` file.
