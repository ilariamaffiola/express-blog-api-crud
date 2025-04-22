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







//esporta il router
module.exports = router;