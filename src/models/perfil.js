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
      this.hasMany(models.arquivo_compartilhado, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.hasMany(models.likes_publicacao, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.hasMany(models.amizade, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
      this.hasMany(models.amizade, {
        foreignKey: 'id_amigo', as: 'id_amigo'
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
    data_nascimento: {
      type: DataTypes.DATE(),
      allowNull: true
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    biografia: {
      type: DataTypes.STRING(1200),
      allowNull: true
    },
    autenticacao: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cancelado: { 
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'perfil',
    tableName: 'perfil',
    freezeTableName: true,
  });
  return perfil;
};