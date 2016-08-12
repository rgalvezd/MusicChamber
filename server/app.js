"use strict";

let express = require("express");
let app = express();

app.use( express.static(__dirname + "/../client") );

app.get("/sheets", (request, response) => {
  response.json( ["Sheet one", "Sheet two", "Sheet three"] );
});

app.listen(8181, () => console.log("Listening on port 8181"));
