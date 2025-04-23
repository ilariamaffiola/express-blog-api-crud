const menu = require('../data/posts.js');
function index(req,res){
    //res.send('lista delle pizze');
    //res.json(menu);
    console.log(req.query);
    const tag = req.query.tags;
    console.log(tag);
    let filteredMenu = menu;
     if(tag){
         filteredMenu = menu.filter((pietanza) => {
             return pietanza.tags.includes(tag);
         });
     };
     res.json(filteredMenu);
};

function show (req,res){
    //res.send(`dettaglio della pietanza ${req.params.id}`);
    const id = parseInt(req.params.id);
    const pietanza = menu.find(pietanza => pietanza.id === id);
   
    console.log(pietanza);
    if(pietanza===undefined){
        res.status(404);
        res.json({
            "error":"not found",
            "message": "la pietanza non è presente nel menù",
        });
    }; 
    res.json(pietanza);
};
function store (req,res){
    //res.send('crea una nuova pietanza');
    const newId = menu [menu.length - 1 ].id + 1;
    const newPietanza = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    menu.push(newPietanza);
    console.log(menu);
    res.status(201);
    res.json(newPietanza);
}
function update (req,res){
    res.send(`modfica totale della pietanza ${req.params.id}`);
}
function modify (req,res){
    res.send(`modfica parziale della pietanza ${req.params.id}`);
}
function destroy (req,res){
    //res.send(`elimina la pietanza ${req.params.id}`);
    const id = parseInt(req.params.id);
    const pietanza = menu.find(pietanza => pietanza.id === id);
    menu.splice(menu.indexOf(pietanza),1);
    if(pietanza===undefined){
        res.status(404);
        res.json({
            "error":"not found",
            "message": "la pietanza non è presente nel menù",
        });
    }; 
    console.log(menu);
    res.status(204);
    res.json({
        "success": true,
        "message": "la pietanza è stata eliminata",
    });
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
};