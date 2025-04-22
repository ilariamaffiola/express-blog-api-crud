/*CRUD*/
const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController.js');
console.log(menuController);
//index
router.get('/', (menuController.index));
//show
router.get('/:id', (menuController.show));
//store
router.post('/', (menuController.store));
//update
router.put('/:id', (menuController.update));
//modify
router.patch('/:id', (menuController.modify));
//destroy
router.delete('/:id', (menuController.destroy));



//esporta il router
module.exports = router;