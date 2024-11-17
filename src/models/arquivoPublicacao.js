import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ArquivoPublicacao = sequelize.define('arquivopublicacao', {
    id_arquivo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'publicacao',
            key: 'id_publicacao'
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
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'arquivopublicacao',
    tableName: 'arquivopublicacao',
    timestamps: false,
    indexes: [
        {
            fields: ['id_publicacao']
        },
        {
            fields: ['id_arquivo_compartilhado']
        },
        {
            fields: ['cancelado']
        }
    ]
});

export default ArquivoPublicacao;
