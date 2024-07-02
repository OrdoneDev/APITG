'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comunidade extends Model {}
  comunidade.init({    
    id_comunidade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING(1200),
        allowNull: false,
    },
    visibilidade: {
        type: DataTypes.TINYINT,
        allowNull: false,
    },
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Comunidade',
    freezeTableName: true,
  });
  return comunidade;
};