'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {}
  perfil.init({
    id_perfil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    data_nascimento: DataTypes.DATE,
    sexo: {
        type: DataTypes.CHAR(1),
        allowNull: false,
    },
    foto: DataTypes.BLOB,
    biografia: DataTypes.STRING(1200),
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Perfil',
    freezeTableName: true,
  });
  return perfil;
};