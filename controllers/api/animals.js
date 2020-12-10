const Animal = require('../../models/animal');


module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteAnimal
};


function index(req, res) {
    Animal.find({})
    .then((animals) => {
        res.status(200).json(animals)
    })
}


function show(req, res) {
    Animal.findById(req.params.id)
    .then((animal) => {
        res.status(200).json(animal)
    })
}


function create(req, res) {
    Animal.create(req.body)
    .then((animal) => {
        res.status(201).json(animal)
    })
}


function update(req, res) {
    Animal.findOneAndUpdate(req.params.id, req.body, {new: true})
    .then((animal) => {
        res.status(200).json(animal)
    })
}


function deleteAnimal(req, res) {
    Animal.findByIdAndDelete(req.params.id)
    .then((animal) => {
        res.status(200).json(animal)
    })
}
