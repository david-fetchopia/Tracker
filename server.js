const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const router = require("express").Router();
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// home page route (http://localhost:8080)
router.get('/test', function(req, res) {
  res.send('im the test page!');  
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('im the about page!'); 
});

// apply the routes to our application
app.use('/api', router);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
