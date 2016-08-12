"use strict";

let express = require("express");
let app = express();

let mongoUtil = require("./mongoUtil");
mongoUtil.connect();

app.use( express.static(__dirname + "/../client") );

app.get("/sheets", (request, response) => {
  let sheets = mongoUtil.sheets();
  sheets.find().toArray((err, docs) => {
    console.log(JSON.stringify(docs));
    let sheetNames = docs.map((sheet) => sheet.name);
    response.json( sheetNames );
  });
});

app.listen(8181, () => console.log("Listening on port 8181"));
