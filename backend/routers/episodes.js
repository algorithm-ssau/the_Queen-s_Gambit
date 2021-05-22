const router = require("express").Router;
let Episode = require('../models/episodes.model');

router.route('/').get((req, res) => {
    Episode.find()
        .then(episodes => res.json(episodes))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const number = Number(req.body.number);
    const name = req.body.name;
    const description = req.body.description;

    const newEpisode = new Episode({
        number,
        name,
        description
    });

    newEpisode.save()
    .then(() => res.json('Episode added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;