const mongoose = require('mongoose');

const mongodbUrl = `mongodb://127.0.0.1:27017/crudapp`

async function dbConnection(){
    try{
        let connect = await mongoose.connect(mongodbUrl);
        console.log("Database Connected Successfully...")
    }catch(error){
        console.log("Error while database connections...",error)
    }
}

module.exports = {dbConnection}