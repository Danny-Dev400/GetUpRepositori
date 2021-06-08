const models = require('../models');

exports.listar = async (req, res, next) => {
    try {
        const exercises = await models.ejercicios.findAll();
         if(exercises){
             res.status(200).json(exercises);
         }else{
             res.status(404).send({message:'There is not routines in the system'});
         }
     } catch (error) {
         res.status(500).send({message: 'Error!!'});
         next(error);
    }
};

exports.buscarImagen = async (req, res, next) => {
    try {
        const ejercicio = await models.ejercicios.findOne({
            where:{
                id: req.params.idExercise
            }
        });
         if(ejercicio){
            res.end(ejercicio.imagen);
         }else{
             res.status(404).send({message:'There is not routines in the system'});
         }
     } catch (error) {
         res.status(500).send({message: 'Error!!'});
         next(error);
    }
};

