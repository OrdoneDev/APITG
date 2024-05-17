'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publicacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.likes_publicacao, {
        foreignKey: 'id_publicacao', as: 'id_publicacao'
      })
    }
  }
  publicacao.init({
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: false
    },
    data_publicacao: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'publicacao',
    tableName: 'publicacao',
    freezeTableName: true,
  });
  return publicacao;
};