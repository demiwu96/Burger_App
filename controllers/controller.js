var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = { burgers: data };
        console.log(hbsObject);

        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    let name = req.body.name;

    burger.insert(name, function(result) {
      // Send back the ID
      res.json({ id: result.insertId });
    });
  });

module.exports = router;