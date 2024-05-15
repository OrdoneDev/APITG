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
      comunidade.hasMany(models.perguntas, {
        foreignKey: 'id_tema'
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
    foto: DataTypes.BLOB,
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
    freezeTableName: true,
  });
  return comunidade;
};