const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://user:password929305@cluster0.jgc83g0.mongodb.net/annotations?retryWrites=true&w=majority';

const conection = mongoose.connect(dbConfig, {
    useNewUrlParser: true, //Padrão

});


module.exports = conection;