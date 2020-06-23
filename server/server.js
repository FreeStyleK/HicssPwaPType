const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

// app.options('/test111.hi', (req, res) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers',
//     'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.send();
// });

//app.use(cors(options));

const path = require("path");
const root_path = path.join(__dirname, "/../build/");
app.use("/", express.static(root_path));

app.use(cors());

app.listen(port, "localhost", () => {
  console.log("server on");
});
