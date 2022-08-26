const Annotations = require('../models/AnnotationsData.js')

module.exports = {

    //Listar Anotações
    async read(request, response){ //Async e await quando é necessario  esperar uma resposta de um db 
        const annotationsList = await Annotations.find();

        return response.json(annotationsList);
    },
    //Criar Anotação
    async create(request, response) {

        const{title, notes, priority} = request.body;

        //Validação se existe Titulo e Nota
        if(!notes || !title){
            return response.status(400).json({error: "Necessário um titulo/anotação!"})
        }

        const annotationCreate = await Annotations.create({
            title,
            notes,
            priority
        });

        return response.json(annotationCreate);

    },

    // Deletar Anotação
    async delete(request, response) {
        const {id} = request.params;
                                                    //Pesquisa por um elemento e o deleta
        const annotationsDelete = await Annotations.findOneAndDelete({_id : id});

        //Validação se existe o id solicitado
        if(annotationsDelete){
            return response.json(annotationsDelete);
        }
        return response.status(401).json({
            error: 'Não foi encontrado o registro para deletar!'});
    },



}