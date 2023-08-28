
const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')
const port = 3000
const app = express()

app.use(express.static(path.join(__dirname, 'public'))) // Cấu hình file tĩnh

// app.use(morgan('combined')) 

app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

console.log('PATH: ',path.join(__dirname, 'resources\\views'))

app.get('/', (req, res) => {
  res.render('home');

});
app.get('/news', (req, res) => {
  console.log(req.query)
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

