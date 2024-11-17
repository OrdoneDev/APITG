import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Publicacao = sequelize.define('publicacao', {
    id_publicacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_entidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'entidade',
            key: 'id_entidade'
        }
    },
    descricao: {
        type: DataTypes.STRING(1200),
        allowNull: false
    },
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    data_publicacao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    data_atualizacao: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'publicacao',
    tableName: 'publicacao',
    timestamps: false,
    paranoid: true,
    indexes: [
        {
            fields: ['id_entidade']
        },
        {
            fields: ['data_publicacao']
        },
        {
            fields: ['cancelado']
        }
    ]
});

export default Publicacao;
