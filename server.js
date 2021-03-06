///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
// Import routes and give the server access to them.
const routes = require("./routes");
const app = express();

///////////////////////////////////////////////////////////////////////////////////////
//                               App & Database Config                               //
///////////////////////////////////////////////////////////////////////////////////////

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("client/build"));

app.use(bodyParser.urlencoded({ extended: false }));

///////////////////////////////////////////////////////////////////////////////////////
//                                       Routes                                      //
///////////////////////////////////////////////////////////////////////////////////////
app.use("/", routes);

app.listen(port, function() {
    console.log("listening on port", port);
  });