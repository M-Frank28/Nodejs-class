const { DataTypes } = require("sequelize");
const {sequelize} = require("sequelize");

module.exports=(sequelize, DataTypes)=> {

    const Student = sequelize.define ("Student",{
        student_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        firstname: {
            type: DataTypes.STRING,
           allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
           allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
           allowNull: true,
        },
       course_id: {
            type: DataTypes.INTEGER,
           allowNull: true,
        }
        


    });

    return Student;



}