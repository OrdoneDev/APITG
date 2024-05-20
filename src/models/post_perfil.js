'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.publicacao, {
        foreignKey: 'id_publicacao', as: 'id_publicacao'
      })
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil', as: 'id_perfil'
      })
    }
  }
  post_perfil.init({
    id_post: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'post_perfil',
    tableName: 'post_perfil',
    freezeTableName: true,
  });
  return post_perfil;
};