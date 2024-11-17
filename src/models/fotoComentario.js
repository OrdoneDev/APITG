import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const FotoComentario = sequelize.define('fotocomentario', {
    id_foto_comentario: {
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
    id_comentario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'comentario',
            key: 'id_comentario'
        },
        onDelete: 'CASCADE'
    }
}, {
    sequelize,
    modelName: 'fotocomentario',
    indexes: [
        {
            fields: ['id_foto']
        },
        {
            fields: ['id_comentario']
        }
    ]
});

export default FotoComentario;
