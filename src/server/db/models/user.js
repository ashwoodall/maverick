'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    isRegistered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    introduction: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    hometown: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    hasKids: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    numberOfKids: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    hasPets: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    aboutPets: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null
    },
    isServiceMember: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null
    },
    soServiceYears: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    pinterest: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    currentDutyStation: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    priorDutyStations: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // User.hasMany( models.kidsAges, { targetKey: 'description' } );
        // User.hasMany( models.activities, { targetKey: 'description' } );
      }
    }
  });
  return User;
};