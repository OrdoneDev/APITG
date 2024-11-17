import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Foto = sequelize.define('foto', {
    id_foto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    foto: {
        type: DataTypes.BLOB,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(1200)
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
    modelName: 'foto',
    indexes: [
        {
            fields: ['data_publicacao']
        },
        {
            fields: ['cancelado']
        }
    ]
});

export default Foto;
