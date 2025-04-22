//richiamo express in una variabile
const express = require('express');
//inizializzo express
const app = express();
//definisco la porta
const port = 3000;

//defisco la prima rotta
app.get('/', (req,res) =>{
    res.send('Hello World!');
});
//inserisco app listen per restare in ascolto sulla porta 3000
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});

const menuRouter = require('./routers/router.js');
app.use('/menu', menuRouter);