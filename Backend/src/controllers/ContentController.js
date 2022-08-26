const Annotations = require('../models/AnnotationsData.js')
const { update } = require('./PriorityController.js')

module.exports = {
    async update(request, response){
        const { id } = request.params;
        const { notes} = request.body;
        
        const annotation = await Annotations.findOne({_id: id});

        if(notes){
            annotation.notes = notes;
            await annotation.save();
        }
        
        return response.json(annotation);
    },
}