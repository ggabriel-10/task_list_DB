const Annotations = require('../models/AnnotationsData.js')

module.exports = {

    // Lista anotações com a classe priority true ou false
    async read(request, response){
        const priority = request.query;

        const priorityNotes = await Annotations.find(priority);

        return response.json(priorityNotes);
    },

    async update(request, response){
        const {id} = request.params;

        const annotation = await Annotations.findOne({_id : id});

        //Se o Priotity foi true, vai mudar para false, e vice versa
        if(annotation.priority){
            annotation.priority = false;
        }
        else {
            annotation.priority = true;
        }

        await annotation.save();

        return response.json(annotation);
    }

};