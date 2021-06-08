const models = require('../models');

exports.listar = async (req, res, next) => {
    try {
        const rutinas = await models.rutinas.findAll();
         if(rutinas){
             res.status(200).json(rutinas);
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
        const rutinas = await models.rutinas.findOne({
            where:{
                id: req.params.idRoutine
            }
        });
         if(rutinas){
            res.end(rutinas.imagen);
         }else{
             res.status(404).send({message:'There is not routines in the system'});
         }
     } catch (error) {
         res.status(500).send({message: 'Error!!'});
         next(error);
    }
};


exports.listar2 = async (req, res, next) => {
    try {
        const rutinas = await models.rutinas.findAll({
            include: [{
                model: models.ejercicios,
                as: 'misEjercicios',                
            }],
            where:{
                id: req.params.idRoutine
            }
        });
         if(rutinas){
             res.status(200).json(rutinas);
         }else{
             res.status(404).send({message:'There is not routines in the system'});
         }
     } catch (error) {
         res.status(500).send({message: 'Error!!'});
         next(error);
    }
};

//Para listar
