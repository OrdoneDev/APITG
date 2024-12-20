import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Comentario = sequelize.define('comentario', {
    id_comentario: {
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
    id_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'publicacao',
            key: 'id_publicacao'
        }
    },
    descricao: {
        type: DataTypes.STRING(1200),
        allowNull: false
    },
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    data_publicacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    data_atualizacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'comentario',
    tableName: 'comentario',
    timestamps: false,
    paranoid: true,
    indexes: [
        {
            fields: ['id_entidade']
        },
        {
            fields: ['id_publicacao']
        },
        {
            fields: ['data_publicacao']
        },
        {
            fields: ['cancelado']
        }
    ]
});

export default Comentario;
