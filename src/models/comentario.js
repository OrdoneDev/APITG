'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.foto_comentario, {
        foreignKey: 'id_comentario'
      })
      this.belongsTo(models.perfil, {
        foreignKey: 'id_perfil'
      })
      this.belongsTo(models.publicacao, {
        foreignKey: 'id_publicacao'
      })
    }
  }
  comentario.init({
    id_comentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id_perfil: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: false
    },
    data_publicacao: {
      type: DataTypes.DATE(),
      allowNull: false
    },
    cancelado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'comentario',
    tableName: 'comentario',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return comentario;
};