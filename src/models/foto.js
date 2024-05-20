'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.foto_comentario, {
        foreignKey: 'id_foto', as: 'id_foto'
      })
      this.hasMany(models.foto_publicacao, {
        foreignKey: 'id_foto', as: 'id_foto'
      })
    }
  }
  foto.init({
    id_foto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(1200),
      allowNull: true
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
    modelName: 'foto',
    tableName: 'foto',
    freezeTableName: true,
  });
  return foto;
};