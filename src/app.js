const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname,'../public'))
const publicDir = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')// if we change the views directory name from views to templates
const partialsPath = path.join(__dirname,'../templates/partials')

const app = express()

app.set('view engine','hbs')
app.set('views',viewsPath) // if we change the views directory name from views to templates
hbs.registerPartials(partialsPath)
// app.use(express.static(publicDir))

// app.get('',(req,res) => {
//     res.send('<h1>Hello express!!</h1>')
// }) 


app.get('',(req,res) => {   
    // req.query.anyKeyValPairFromURL
    res.render('index',{
        title:'weather app',
        name:'annu'
    })
}) 
// app.get('/help',(req,res) => {
//     res.send('Hello express help!!')
// }) 

app.get('/help',(req,res) => {
    res.send({name:'annu'})
}) 
app.listen(3000, () => console.log('Server is up!'))

