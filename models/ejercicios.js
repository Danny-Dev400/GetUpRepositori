'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ejercicios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.rutinas, {foreignKey:'rutinaID', as: 'rutinas'})
    }
  };
  ejercicios.init({
    nombre: DataTypes.STRING,
    type: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    imagen: DataTypes.BLOB,
    video: DataTypes.STRING,
    duracion: DataTypes.INTEGER,
    series: DataTypes.INTEGER,
    repeticiones: DataTypes.INTEGER,
    rutinaID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ejercicios',
  });
  return ejercicios;
};