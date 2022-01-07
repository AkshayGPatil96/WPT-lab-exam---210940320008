
const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host = "localhost",
    user = "root",
    password = "cdac",
    database = "project1",
};

async function selectUser(user){
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection successfull");

    let sql = `select * from user`;
    const list = await connection.queryAsync(sql,[10]);
    await connection.endAsync();
    return list;
}



module.exports = {selectUser};