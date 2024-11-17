import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Amizade = sequelize.define(
  "amizade",
  {
    id_amizade: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_entidade1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "entidade",
        key: "id_entidade",
      },
    },
    id_entidade2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "entidade",
        key: "id_entidade",
      },
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [["pendente", "aceito", "recusado"]],
      },
    },
    data_solicitacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    data_resposta: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "amizade",
    tableName: "amizade",
    indexes: [
      {
        fields: ["id_entidade1", "id_entidade2"],
      },
    ],
  }
);

export default Amizade;
