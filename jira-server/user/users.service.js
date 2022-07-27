const db_connection = require("../database/database");

module.exports = {
    authentication,
};

//VERIFY USER

const verifyUser = (con, username) => {
  return new Promise((resolve, reject) => {
    var sqlQuery =
      "SELECT * FROM `user` WHERE `username` = '" + username + "'; ";

    con.query(sqlQuery, function (err, result) {
      if (err) return reject(err);

      if (result.length < 1) {
        return resolve([]);
      } else {
        return resolve(result[0]);
      }
    });
  });
};

 async function authentication({username,password})
 {
 
 try {
    const conn = await db_connection();
    const response = await verifyUser(conn, username,password);

    if(response.length < 1)
    {
        return {status:"400", message:"user can not be found", response};
    } else {

    }
    
 } catch (e) {
    console.error(e)
 }
}