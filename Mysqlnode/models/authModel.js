
const { DataTypes } = require("sequelize");
const {sequelize} = require("sequelize");

module.exports=(sequelize, DataTypes)=> {

    const User = sequelize.define ("User",{
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        email: {
            type: DataTypes.STRING,
           allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
           allowNull: false,
        }
     


    });

    return User;



}