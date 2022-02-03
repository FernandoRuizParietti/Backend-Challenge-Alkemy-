require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const CharacterFactory = require('./Characters')
const GeneresFactory = require('./Generes')
const CategoryFactory = require('./Category')
const UserFactory = require('./User')
const RoleFactory = require('./Rol')

const {
    DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
  } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/', file)));
  });

  // Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const Character = CharacterFactory(sequelize)
const Generes = GeneresFactory(sequelize)
const Category = CategoryFactory(sequelize)
const User = UserFactory(sequelize)
const Role = RoleFactory(sequelize)

// console.log(Character,'character')
// console.log(User, 'User')
// console.log(Role, 'Role')

// const { Category, Characters, Generes} = sequelize.models;

//hago mis relaciones

Character.belongsToMany(Category, {through: 'CharactersCategory'})
//Category.belongsToMany(Character, {through: 'CharactersCategory'})
Category.belongsTo(Generes,{through: 'CategoryGeneres'})
Generes.belongsToMany(Category,{through: 'CategoryGeneres'})

User.belongsTo(Role);
Role.hasMany(User);


  

module.exports = {
    conn:sequelize,
    Character,
    Generes,
    Category,
    User,
    Role,
};