import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FotoPublicacao = sequelize.define('fotopublicacao', {
    id_foto_publicacao: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_foto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'foto',
            key: 'id_foto'
        },
        onDelete: 'CASCADE'
    },
    id_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'publicacao',
            key: 'id_publicacao'
        },
        onDelete: 'CASCADE'
    }
}, {
    sequelize,
    modelName: 'fotopublicacao',
    indexes: [
        {
            fields: ['id_foto']
        },
        {
            fields: ['id_publicacao']
        }
    ]
});

export default FotoPublicacao;
