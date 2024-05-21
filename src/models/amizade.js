'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class amizade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil'
      })
      this.belongsTo(models.perfil, {
        foreignKey: 'id_amigo'
      })
    }
  }
  amizade.init({
    id_amizade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_amigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'amizade',
    tableName: 'amizade',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return amizade;
};