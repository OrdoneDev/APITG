'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao_arquivo extends Model {}
  Avaliacao_arquivo.init({    
    id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Perfil',
            key: 'id_perfil'
        }
    },
    id_arquivo_compartilhado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Arquivo_compartilhado',
            key: 'id_arquivo_compartilhado'
        }
    },
    descricao: DataTypes.STRING(1200),
    score: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    data_publicacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Avaliacao_arquivo',
    freezeTableName: true,
  });
  return Avaliacao_arquivo;
};