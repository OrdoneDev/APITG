'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicacao_perfil extends Model {}
  Publicacao_perfil.init({
    id_publicacao: {
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
    descricao: {
        type: DataTypes.STRING(1200),
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
    modelName: 'Publicacao_perfil',
    freezeTableName: true,
  });
  return Publicacao_perfil;
};