'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class membro_comunidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.belongsTo(models.comunidade, {
        foreignKey: 'id_comunidade', as: 'id_comunidade'
      })
    }
  }
  membro_comunidade.init({
    id_membro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cargo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'membro_comunidade',
    tableName: 'membro_comunidade',
    freezeTableName: true,
  });
  return membro_comunidade;
};