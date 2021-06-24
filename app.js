const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;




app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.render('home',{
        titulo: "Curso de Node",
        nombre: "Clúster Tecnológico Catamarca"
    });
});


app.get('/generic', (req,res)=>{
    res.render('generic',{
        titulo: "Curso de Node",
        nombre: "Clúster Tecnológico Catamarca"
    });
});

app.get('/elements', (req,res)=>{
    res.render('elements',{
        titulo: "Curso de Node",
        nombre: "Clúster Tecnológico Catamarca"
    });
});

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/public/404.html');
});
 
app.listen(port, ()=>{
    console.log(`El servidor esta corriendo en el puerto: ${port}`);
});