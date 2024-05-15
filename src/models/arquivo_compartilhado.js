'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arquivo_compartilhado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      arquivo_compartilhado.belongsTo(models.perguntas, {
        foreignKey: 'id_pergunta'
      })
      arquivo_compartilhado.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      })
    }
  }
  arquivo_compartilhado.init({
    id_arquivo_compartilhado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    numero_simulado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'arquivo_compartilhado',
    freezeTableName: true,
  });
  return arquivo_compartilhado;
};