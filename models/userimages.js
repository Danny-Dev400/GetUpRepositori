'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userimages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey:'userID', as: 'usuarioID'})
    }
  };
  userimages.init({
    imagen: DataTypes.BLOB,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userimages',
  });
  return userimages;
};