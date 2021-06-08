'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ejercicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      imagen: {
        type: Sequelize.BLOB
      },
      rutinaID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'rutinas',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ejercicios');
  }
};