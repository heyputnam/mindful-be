const Med = require('../models/med')

async function index(req, res){
    try{
        const meds = await Med.find({})
        res.status(200).json(meds);
    }catch(error){
        console.log(error);
        res.status(400).json({error: 'oh no an error occurred'})
    
    }
}

async function create(req,res){
const med = await Med.create(req.body)
res.status(200).json(med)
}

module.exports = {
    index,
    create,
}