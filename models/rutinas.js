'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rutinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey:'userID', as: 'usuarioID'})
      this.hasMany(models.ejercicios, {foreignKey:'rutinaID', as: 'misEjercicios'})
    }
  };
  rutinas.init({
    imagen: DataTypes.BLOB,
    nombre: DataTypes.STRING,
    type: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rutinas',
  });
  return rutinas;
};