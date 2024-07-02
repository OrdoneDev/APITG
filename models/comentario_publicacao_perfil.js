'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario_publicacao_perfil extends Model {}
  Comentario_publicacao_perfil.init({    
    id_comentario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Publicacao_Perfil',
        key: 'id_publicacao'
      }
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
    modelName: 'Comentario_publicacao_perfil',
    freezeTableName: true,
  });
  return Comentario_publicacao_perfil;
};