import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const AvaliacaoArquivo = sequelize.define('avaliacaoarquivo', {
    id_avaliacao: {
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
    id_arquivo_compartilhado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'arquivocompartilhado',
            key: 'id_arquivo_compartilhado'
        }
    },
    descricao: {
        type: DataTypes.STRING(1200),
        allowNull: true
    },
    score: {
        type: DataTypes.FLOAT,
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
    modelName: 'avaliacaoarquivo',
    tableName: 'avaliacaoarquivo',
    timestamps: false,
    indexes: [
        {
            fields: ['id_entidade']
        },
        {
            fields: ['id_arquivo_compartilhado']
        },
        {
            fields: ['score']
        },
        {
            fields: ['cancelado']
        }
    ]
});

export default AvaliacaoArquivo;