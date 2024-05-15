'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      perfil.hasMany(models.questionarios, {
        foreignKey: 'id_perfil'
      })
    }
  }
  perfil.init({
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    nome: { 
      type: DataTypes.STRING(80),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    data_nascimento: DataTypes.DATE(),
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    foto: DataTypes.BLOB,
    biografia: DataTypes.STRING(1200),
    autenticacao: DataTypes.STRING,
    cancelado: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'perfil',
    freezeTableName: true,
  });
  return perfil;
};