const { Pool } = require('pg'); //import Pool

const db_connection = () => {
return new Promise((resolve, reject) => {
const con = new Pool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    password:process.env.DB_PASS,
    database:process.env.POSTGRES_DB
})
con.connect(function (err) {
    if (err) return  reject(err); 
    console.log("this is error",err.message);
    resolve(con);
  });
});
}
module.export = db_connection;