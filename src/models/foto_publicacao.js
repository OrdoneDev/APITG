'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foto_publicacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.foto, {
        foreignKey: 'id_foto', as: 'id_foto'
      })
      this.belongsTo(models.publicacao, {
        foreignKey: 'id_publicacao', as: 'id_publicacao'
      })
    }
  }
  foto_publicacao.init({
    id_foto_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_foto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'foto_publicacao',
    tableName: 'foto_publicacao',
    freezeTableName: true,
  });
  return foto_publicacao;
};