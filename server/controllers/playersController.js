
const Player = require('mongoose').model('Player');

module.exports = {

    list(req, res){
        Player.find({})
        .then(result => res.json(result))
        .catch(err => console.log(err));
    },
    
    create(req, res){
        const player = new Player(req.body);
        player.save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
    },

    update(req, res){
        Player.findByIdAndUpdate(req.id, req.body,
        {runValidators:true, context: 'query'})
        .then(result => res.json(result))
        .catch(err => res.json(err));
    }

}