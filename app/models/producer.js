import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Producer = sequelize.define('producer', {
    name: { type: DataTypes.STRING,  allowNull: false },
    country: { type: DataTypes.STRING,  allowNull: false },
    yearOfFoundatin: { type: DataTypes.INTEGER,  allowNull: false },
    capacityHectare: { type: DataTypes.INTEGER,  allowNull: false }
})

export default Producer
