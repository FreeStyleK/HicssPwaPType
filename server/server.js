const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const https = require('https')
const fs = require('fs')
const path = require("path");
const root_path = path.join(__dirname, "/../build/");

app.use("/", express.static(root_path));
app.use(cors());
app.use(express.static('public'));

/* local http */
// app.listen(port, "localhost", () => {
//   console.log("server on");
// });

//////////////////////////////////////////////////////////////

const httpsOptions = {
/* local https */
key: fs.readFileSync(path.join(__dirname, '../security/hicss.co.kr_202006266S81.key')).toString(),
cert: fs.readFileSync(path.join(__dirname, '../security/hicss.co.kr_202006266S81.crt')).toString()

/* server path */
// key: fs.readFileSync(path.join('', '/WASBASE/apache-tomcat-8.5.54/conf/cert_old/hicss.co.kr_202006266S81.key')).toString(),
// cert: fs.readFileSync(path.join('', '/WASBASE/apache-tomcat-8.5.54/conf/cert_old/hicss.co.kr_202006266S81.crt')).toString()
};

https.createServer(httpsOptions, app).listen(port, function() {
  console.log("HTTPS server listening on port " + port);
});