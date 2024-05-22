// const dbName = 'food-ordering';
// const dbHost = 'localhost';
// const dbPort = 27017;
// module.exports = {
//     url: `mongodb://${dbHost}:${dbPort}/${dbName}`
// }

const dbName = process.env.DB_NAME || 'food-ordering';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbUser = process.env.DB_USER || 'amreesh'; 
const dbPassword = process.env.DB_PASSWORD || 'Amreesh1234'; 

let dbUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`;
if (dbUser && dbPassword) {
    dbUrl = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
}

module.exports = {
    url: dbUrl
};
