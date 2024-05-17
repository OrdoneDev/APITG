'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes_publicacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.belongsTo(models.publicacao, {
        foreignKey: 'id_publicacao', as: 'id_publicacao'
      })
    }
  }
  likes_publicacao.init({
    id_like: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'likes_publicacao',
    tableName: 'likes_publicacao',
    freezeTableName: true,
  });
  return likes_publicacao;
};