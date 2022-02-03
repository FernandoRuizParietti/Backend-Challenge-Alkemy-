const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define('role', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    name:{
        type: DataTypes.STRING,
        defaultValue:'client'
    }
  }, {timestamps:false});
};
