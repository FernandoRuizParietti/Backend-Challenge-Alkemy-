const { DataTypes } = require('sequelize');


module.exports = function (sequelize)  {
    // defino el modelo
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        token: DataTypes.STRING,
        exp: DataTypes.DATE,
        activated: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
     }, {
            timestamps:false,
        
        /// confirmado / autorizado:
    });
};
