import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ArquivoCompartilhado = sequelize.define('arquivocompartilhado', {
    id_arquivo_compartilhado: {
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
    titulo: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    arquivo: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(1200),
        allowNull: true
    },
    score_medio: {
        type: DataTypes.FLOAT,
        allowNull: true
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
    modelName: 'arquivocompartilhado',
    tableName: 'arquivocompartilhado',
    timestamps: false,
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

export default ArquivoCompartilhado;