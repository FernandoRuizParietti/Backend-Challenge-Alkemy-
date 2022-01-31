const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define('character', {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: { //peso
      type: DataTypes.STRING,
      allowNull: false,
    },
    history: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    filmseries:{
      type: DataTypes.STRING,
      allowNull: true, //permito que se pueda cargar una raza sin su foto
    },
  },{
    timestamps: false,
  
  });
};