///////////////////////////////////////////////////////////////////////////////////////
//                             Dependencies & Variables                              //
///////////////////////////////////////////////////////////////////////////////////////
// Require express so we can make an express application
const express = require("express");
// Parses our HTML and helps us find elements
const cheerio = require("cheerio");
// Makes HTTP request for HTML page
const request = require("request");
// Provides utilities for working with file and directory paths.
const path = require("path");
// Middle-ware style router
const router = express.Router();
// Require the article model schema
const db = require("../models");

///////////////////////////////////////////////////////////////////////////////////////
//                              Methods for Controller                               //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = {
    findAll: function(req, res) {
        db.Article
            .findById(req.params.id)
            .then(dbModel => res.JSON(dbModel))
            .catch(err => res.status(422).json(err))
    }
};

///////////////////////////////////////////////////////////////////////////////////////
//                                     Get/Post                                      //
///////////////////////////////////////////////////////////////////////////////////////
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

///////////////////////////////////////////////////////////////////////////////////////
//                                     Exports                                       //
///////////////////////////////////////////////////////////////////////////////////////
module.exports = router;