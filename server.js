// To run this file, cd to the appropriate directory and enter: `node server.js`.
var express = require("express");

var app = express();
app.use("/", express.static(__dirname));
// All requests sent to the server are redirected automatically to the corresponding HTML page
// in the same directory as this file. Note that the automatic page is always `index.html`.

// app.use(express.urlencoded());
// This allows the reception of URL parameters in POST requests.

app.listen(process.env.PORT || 3000, function() { console.log('Node.JS is listening! Port '+(process.env.PORT || 3000)); });
// 80 is the default port when connecting to websites.
// The running website can be accessed by typing `http://localhost:3000` in the address bar of Chrome.
