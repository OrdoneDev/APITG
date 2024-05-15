'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perguntas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      perguntas.hasOne(models.respostas, {
        foreignKey: 'id_pergunta'
      })
      perguntas.hasMany(models.questionarios, {
        foreignKey: 'id_pergunta'
      })
      perguntas.belongsTo(models.temas, {
        foreignKey: 'id_tema'
      })
    }
  }
  perguntas.init({
    id_pergunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    pergunta: DataTypes.STRING(768),
    foto: DataTypes.BLOB,
    resposta_certa: DataTypes.STRING(384),
    banca: DataTypes.STRING(255),
    concurso: DataTypes.STRING(255),
    orgao: DataTypes.STRING(255),
    dificuldade: DataTypes.FLOAT(2,2),
    ano: DataTypes.DATE()
  }, {
    sequelize,
    modelName: 'perguntas',
    freezeTableName: true,
  });
  return perguntas;
};