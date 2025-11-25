import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('producers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    },
    yearOfFoundatin: {
      type: DataTypes.INTEGER
    },
    capacityHectare: {
      type: DataTypes.INTEGER
    },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('producers');
}

export { up, down }
