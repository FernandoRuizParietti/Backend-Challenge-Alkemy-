const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = function (sequelize) {
  // defino el modelo
  return sequelize.define('genere', {
    id: {
      type: DataTypes.UUID,
      allowNull: false, //no permite dejar el campo en blanco
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, // esta linea me genera automaticamente un UUID 
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true, 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    }, 
    filmseries:{
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },{
    timestamps: false,
  
  });
};