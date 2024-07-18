const dbConfig = requre('../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{

        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false
    }
    
)
sequelize.authenticate()
.then(()=>{
    console.log('database connection successful...');
})

.catch(err => {
    console.log('Error'+ err)
})

const db ={}
db.Sequelize = Sequelize
db.Sequelize = Sequelize

db,students = require('./studentModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(()=>{
    console.log('re-sync done')
})

module.exports = db