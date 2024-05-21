'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publicacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.likes_publicacao, {
        foreignKey: 'id_publicacao'
      })
      this.hasMany(models.arquivo_publicacao, {
        foreignKey: 'id_publicacao'
      })
      this.hasMany(models.comentario, {
        foreignKey: 'id_publicacao'
      })
      this.hasMany(models.foto_publicacao, {
        foreignKey: 'id_publicacao'
      })
      this.hasMany(models.post_perfil, {
        foreignKey: 'id_publicacao'
      })
      this.hasMany(models.post_comunidade, {
        foreignKey: 'id_publicacao'
      })
    }
  }
  publicacao.init({
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    modelName: 'publicacao',
    tableName: 'publicacao',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  });
  return publicacao;
};