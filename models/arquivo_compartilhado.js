'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arquivo_compartilhado extends Model {}
  Arquivo_compartilhado.init({    
    id_arquivo_compartilhado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_perfil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Perfil',
            key: 'id_perfil'
        }
    },
    id_comunidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Comunidade',
            key: 'id_comunidade'
        }
    },
    titulo: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    arquivo_compartilhado: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    descricao: DataTypes.STRING(1200),
    score_medio: DataTypes.FLOAT,
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
    modelName: 'Arquivo_compartilhado',
    freezeTableName: true,
  });
  return Arquivo_compartilhado;
};