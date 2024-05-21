'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comunidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.membro_comunidade, {
        foreignKey: 'id_comunidade'
      })
      this.hasMany(models.post_comunidade, {
        foreignKey: 'id_comunidade'
      })
    }
  }
  comunidade.init({
    id_comunidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: false
    },
    visibilidade: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'comunidade',
    tableName: 'comunidade',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return comunidade;
};