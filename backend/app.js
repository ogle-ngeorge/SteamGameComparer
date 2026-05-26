// This sets up the web server. Imports routes, controllers, and database connections.
// In a nutshell it connects everything together and starts the server.


require('dotenv').config() 


// Start the webpage & import files
const express = require('express');
const app = express();
const routes = require('./routes');


// Use the router for all /api endpoints
app.use('/api', routes);


// Configure port from .env file
const port = process.env.PORT;


// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Export the app to be used in routes.js
module.exports = app;
