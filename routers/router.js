/*CRUD*/
const express = require('express');
const router = express.Router();

//index
router.get('/', (req,res) => {
    res.send('Lista delle pietanze');
});
//show
router.get('/:id', (req,res) => {
    res.send(`dettaglio della pietanza ${req.params.id}`); 
});
//store
router.post('/', (req,res) => {
    res.send('crea una nuova pietanza');
});
//update
router.put('/:id', (req,res) =>{
    res.send(`modfica totale della pietanza ${req.params.id}`);
});
//modify
router.patch('/:id', (req,res) => {
    res.send(`modfica parziale della pietanza ${req.params.id}`);
});
//destroy
router.delete('/:id', (req,res) => {
    res.send(`elimina la pietanza ${req.params.id}`);
});



//esporta il router
module.exports = router;