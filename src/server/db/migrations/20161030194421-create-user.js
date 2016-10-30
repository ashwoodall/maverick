'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      isRegistered: {
        type: Sequelize.BOOLEAN
      },
      age: {
        type: Sequelize.INTEGER
      },
      introduction: {
        type: Sequelize.TEXT
      },
      hasKids: {
        type: Sequelize.STRING
      },
      numberOfKids: {
        type: Sequelize.INTEGER
      },
      hasPets: {
        type: Sequelize.BOOLEAN
      },
      aboutPets: {
        type: Sequelize.TEST
      },
      isServiceMember: {
        type: Sequelize.BOOLEAN
      },
      soServiceYears: {
        type: Sequelize.INTEGER
      },
      facebook: {
        type: Sequelize.STRING
      },
      twitter: {
        type: Sequelize.STRING
      },
      instagram: {
        type: Sequelize.STRING
      },
      pinterest: {
        type: Sequelize.STRING
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};