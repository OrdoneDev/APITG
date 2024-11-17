import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const LikePublicacao  = sequelize.define('likepublicacao', {
    id_like: {
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
        },
        onDelete: 'CASCADE'
    },
    id_entidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'entidade',
            key: 'id_entidade'
        }
    }
}, {
    sequelize,
    modelName: 'likepublicacao',
    tableName: 'likepublicacao',
    timestamps: true,
    paranoid: true,
    indexes: [
        {
            fields: ['id_publicacao']
        },
        {
            fields: ['id_entidade']
        }
    ]
});

export default LikePublicacao;
