import Crop from './crop.js';
import User from './user.js';
import Producer from './producer.js';
// import sequelize from '../database/database.js'

const db = {};

db.User = User;
db.Crop = Crop;
db.Producer = Producer;

// await sequelize.sync({
//     alter: true
// })

export default db;
