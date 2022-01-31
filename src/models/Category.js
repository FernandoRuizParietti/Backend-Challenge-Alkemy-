const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define('category', {
    id: {
      type: DataTypes.UUID,
      allowNull: false, //no permite dejar el campo en blanco
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // esta linea me genera automaticamente un UUID 
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true, //permito que se pueda cargar una raza sin su foto
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    characters: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    timestamps: false
    
  });
};