const { connect } = require('mongoose');
const MONGO_HOSTNAME = 'localhost';
const MONGO_PORT = '27017';
const MONGO_DB = 'users';
const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

module.exports = async ()=>{
    try {
       await connect(url, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useFindAndModify: false
       });
       console.log("Succesfully connected to database", url);
       return Promise.resolve(true)
    } catch (error) {
        console.error(error.stack);
        return Promise.reject(error)
    }
}
