'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foto_comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.foto, {
        foreignKey: 'id_foto'
      })
      this.belongsTo(models.comentario, {
        foreignKey: 'id_comentario'
      })
    }
  }
  foto_comentario.init({
    id_foto_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_foto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'foto_comentario',
    tableName: 'foto_comentario',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return foto_comentario;
};