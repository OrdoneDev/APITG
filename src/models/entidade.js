import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Entidade = sequelize.define('entidade', {
    id_entidade: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATEONLY
    },
    sexo: {
        type: DataTypes.CHAR(1)
    },
    foto: {
        type: DataTypes.BLOB
    },
    biografia: {
        type: DataTypes.STRING(1200)
    },
    cancelado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    tipo_entidade: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['usuario', 'comunidade']]
        }
    },
    data_criacao: {
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
    modelName: 'entidade',
    tableName: 'entidade',
    timestamps: false,
    indexes: [
        {
            name: 'idx_entidade_nome',
            fields: ['nome']
        },
        {
            name: 'idx_entidade_tipo_cancelado',
            fields: ['tipo_entidade', 'cancelado']
        }
    ],
    hooks: {
        beforeUpdate: (entidade) => {
            entidade.data_atualizacao = new Date();
        }
    },
    scopes: {
        active: {
            where: {
                cancelado: false
            }
        }
    }
});

export default Entidade;
