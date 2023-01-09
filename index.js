const express = require("express")
const path= require('path')
const fs= require('fs')
const app = express();
const port = 80;
app.use('/static',express.static('static'))  //'static is a folder name'
app.use(express.urlencoded()) // Is used to get the data from the form .

app.set('view engine' , 'pug')  // Set templet engine as Pug
app.set('views' , path.join(__dirname, 'views')) //set the view directry  **views is folder name
 
app.get('/', (req, res) => {
  const tsend ={'title': 'TheGym'}
    res.status(200).render(`home.pug`, tsend)
  })
app.get('/pricing', (req, res) => {
  const tsend ={'title': 'TheGym'}
    res.status(200).render(`pricing.pug`, tsend)
  })
app.get('/feature', (req, res) => {
  const tsend ={'title': 'TheGym'}
    res.status(200).render(`feature.pug`, tsend)
  })

app.post('/', (req, res) => {
  console.log(req.body);
  first_name=req.body.first_name
  last_name=req.body.last_name
  email=req.body.email
  address=req.body.address
  city=req.body.city
  gender=req.body.gender
  mobile=req.body.mobile
  const data= `First Name : ${first_name} , Last Name : ${last_name} , Email : ${email} ,Address : ${address} , City : ${city} , Gender : ${gender} , Moble : ${mobile}`
  fs.writeFileSync('data.txt',data)
  const tsend ={'title': 'Submited'}
    res.status(200).render(`home.pug`, tsend)
  })
  // app.get('/pricing', (req, res) => {
  //   res.status(200).render(`pricing.pug`)
  // })
  


app.listen( port ,()=>{
    console.log(`The application started successfully at port 80 `);
})