const express = require('express')
const app = express()
const cors = require("cors")
const sequelize = require('./models/db');

app.use(cors())
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = require("./routes/routes");
app.use(routes);

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html; charset=utf-8');
    res.send("<h1 style='text-align: center; background-color: olive;'>Homepage here! yay!</h1>");
})

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))

const port = 4000;

sequelize.sync().then(() => {
    app.listen(process.env.PORT || port, () => {
        console.log(`Server is running on port ${port}`)
    })
})
