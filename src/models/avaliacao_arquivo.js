'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avaliacao_arquivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.belongsTo(models.arquivo_compartilhado, {
        foreignKey: 'id_arquivo_compartilhado', as: 'id_arquivo_compartilhado'
      })
    }
  }
  avaliacao_arquivo.init({
    id_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_arquivo_compartilhado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: true
    },
    score: {
      type: DataTypes.TINYINT,
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
    modelName: 'avaliacao_arquivo',
    tableName: 'avaliacao_arquivo',
    freezeTableName: true,
  });
  return avaliacao_arquivo;
};