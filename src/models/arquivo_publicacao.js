'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arquivo_publicacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.publicacao, {
        foreignKey: 'id_publicacao', as: 'id_publicacao'
      })
      this.belongsTo(models.arquivo_compartilhado, {
        foreignKey: 'id_arquivo_compartilhado', as: 'id_arquivo_compartilhado'
      })
    }
  }
  arquivo_publicacao.init({
    id_arquivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_arquivo_compartilhado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'arquivo_publicacao',
    tableName: 'arquivo_publicacao',
    freezeTableName: true,
  });
  return arquivo_publicacao;
};