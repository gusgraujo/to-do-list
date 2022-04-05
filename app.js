const express = require('express');
const checklistRouter = require('./src/routes/checklist')
const app = express();
require('./config/database')

app.listen((3000), ()=>{
    console.log("Servidor iniciado!");
});

app.use(express.json());

app.use('/checklists',checklistRouter);


app.get('/json',(req,res) => {
    console.log(req.body)
    res.json({tittle:'Tarefa X', done :true});
});


