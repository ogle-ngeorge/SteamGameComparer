// Routes define URL endpoints. They receive requests, call the appropriate controller functions, and send responses back to the client.
// Define how data sent to server and what reque

// Import controller functions
const express = require('express');
const router = express.Router(); // Create router 
const {getProfileInformation, getOwnedGames, compareGames} = require('./controllers');

// Define routes and associate them with controller functions. These are the endpoints that the frontend will call to get data from the backend.
router.get('/profile/:steamid', getProfileInformation);
router.get('/ownedGames/:steamid', getOwnedGames);
router.get('/compareGames/:steamid1/:steamid2', compareGames);

// Export the app to be used in app.js
module.exports = router;

