const router = require("express").Router();
let Info = require('../models/info.model');

router.route('/').get((req, res) => {
    Info.find()
        .then(info => res.json(info))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Info.findById(req.params.id)
    .then(info => res.json(info))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const nameRU = req.body.nameRU;
    const biography = req.body.biography;

    const newInfo = new Info({
        name,
        nameRU,
        biography
    });

    newInfo.save()
    .then(() => res.json('Info added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;