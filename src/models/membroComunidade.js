import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const MembroComunidade = sequelize.define('membrocomunidade', {
    id_membro: {
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
    id_comunidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'entidade',
            key: 'id_entidade'
        }
    },
    cargo: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [['pendente', 'aceito', 'recusado']]
        }
    },
    data_solicitacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    data_resposta: {
        type: DataTypes.DATE
    }
}, {
    sequelize,
    modelName: 'membrocomunidade',
    tableName: 'membrocomunidade',
    indexes: [
        {
            fields: ['id_entidade', 'id_comunidade']
        }
    ]
});

export default MembroComunidade;
