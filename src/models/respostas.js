'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class respostas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      respostas.belongsTo(models.perguntas, {
        foreignKey: 'id_pergunta'
      })
    }
  }
  respostas.init({
    id_resposta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      get: function() {
        return JSON.parse(this.getDataValue("respostas"));
      },
      set: function(value) {
        return this.setDataValue("respostas", JSON.stringify(value));
      }
    }
  }, {
    sequelize,
    modelName: 'respostas',
    freezeTableName: true,
  });
  return respostas;
};