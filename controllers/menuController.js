const menu = require('../data/posts.js');

function index(req,res){
    res.send('lista delle pizze');
}
function show (req,res){
    res.send(`dettaglio della pietanza ${req.params.id}`); 
}
function store (req,res){
    res.send('crea una nuova pietanza');
}
function update (req,res){
    res.send(`modfica totale della pietanza ${req.params.id}`);
}
function modify (req,res){
    res.send(`modfica parziale della pietanza ${req.params.id}`);
}
function destroy (req,res){
    res.send(`elimina la pietanza ${req.params.id}`);
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};