'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.rutinas, {foreignKey:'userID', as: 'misRutinas'})
      this.hasMany(models.userimages, {foreignKey:'userID', as: 'misImagenes'})
    }
  };
  user.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    genero: DataTypes.STRING,
    nivel: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    estatura: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};