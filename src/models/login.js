import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import bcrypt from 'bcrypt';

const Login = sequelize.define('login', {
    id_login: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_entidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ultimo_login: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'login',
    tableName: 'login',
    indexes: [
        {
            fields: ['id_entidade']
        },
        {
            fields: ['email']
        }
    ],
    hooks: {
        beforeCreate: async (login) => {
            const salt = await bcrypt.genSalt(10);
            login.senha = await bcrypt.hash(login.senha, salt);
        },
        beforeUpdate: async (login) => {
            if (login.changed('senha')) {
                const salt = await bcrypt.genSalt(10);
                login.senha = await bcrypt.hash(login.senha, salt);
            }
        }
    }
});

export default Login;