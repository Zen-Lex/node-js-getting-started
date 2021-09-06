const face = require("cool-ascii-faces");
const express = require('express')
const app = express();

const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.use(express.static(path.join(__dirname, '/public')))
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')

// app.get('/react', (req, res) => {
//     res.set("Content-Type", "text/html");
//     res.sendFile(path.join(__dirname, "client/test-react/public/index.html"));
// }); 

app.get("/hello", (req, res) => {
    res.send(face());
}); 

app.listen(PORT, () => {
    console.log(`Listening on ${ PORT }`)
});
