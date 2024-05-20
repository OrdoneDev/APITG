'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arquivo_compartilhado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.hasMany(models.arquivo_publicacao, {
        foreignKey: 'id_arquivo_compartilhado', as: 'id_arquivo_compartilhado'
      })
      this.hasMany(models.avaliacao_arquivo, {
        foreignKey: 'id_arquivo_compartilhado', as: 'id_arquivo_compartilhado'
      })
    }
  }
  arquivo_compartilhado.init({
    id_arquivo_compartilhado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    arquivo_compartilhado: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: true
    },
    score_medio: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    modelName: 'arquivo_compartilhado',
    tableName: 'arquivo_compartilhado',
    freezeTableName: true,
  });
  return arquivo_compartilhado;
};