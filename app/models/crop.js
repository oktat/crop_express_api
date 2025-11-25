import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Crop = sequelize.define('crop', {
    name: { type: DataTypes.STRING,  allowNull: false },
    type: { type: DataTypes.STRING,  allowNull: false },
    proteinContent: { type: DataTypes.FLOAT,  allowNull: false },
    producerId: { type: DataTypes.INTEGER,  allowNull: false }
})

export default Crop
