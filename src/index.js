
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const port = 3000
const route = require("./routes")
const app = express()

app.use(express.static(path.join(__dirname, 'public'))) // Cấu hình file tĩnh
// app.use(morgan('combined')) 
app.use(express.urlencoded({
  extended: true
})) //Xử lí dữ liệu  từ server -> client
app.use(express.json())  //Xử lí dữ liệu từ client ->  server 

app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

// console.log('PATH: ',path.join(__dirname, 'resources\\views'))

route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

