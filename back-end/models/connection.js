const db = require('../config/db');



module.exports.allPlayers = function(callback) {
    // console.log(phc)
    var sql = 'SELECT * FROM footballers; ';
    db.query(sql, callback);
}

module.exports.allcount = function(callback) {
    // console.log(phc)
    var sql = 'SELECT count(*) FROM footballers; ';
    db.query(sql, callback);
}



module.exports.getByName = function(name,callback) {
    // console.log(phc)
    var sql = 'SELECT * FROM footballers where Name=?; ';
    db.query(sql,[name], callback);
}
module.exports.getName = function(callback) {
    // console.log(phc)
    var sql = 'SELECT Name FROM footballers ; ';
    db.query(sql,callback);
}

// module.exports.getByNationality = function(name,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where Nationality=?; ';
//     db.query(sql,[name], callback);
// }
// module.exports.getNationality = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT Nationality FROM footballers ; ';
//     db.query(sql,callback);
// }
// module.exports.getNational_Position = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT National_Position FROM footballers; ';
//     db.query(sql, callback);
// }
// module.exports.getByNational_Position = function(name,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where National_Position=?; ';
//     db.query(sql,[name], callback);
// }


// module.exports.getNational_Kit = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT National_Kit FROM footballers; ';
//     db.query(sql, callback);
// }
// module.exports.getByNational_Kit = function(kit,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where National_Kit=?; ';
//     db.query(sql,[kit], callback);
// }

// module.exports.getClub = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT Club FROM footballers; ';
//     db.query(sql, callback);
// }
// module.exports.getByClub = function(Club,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where Club=?; ';
//     db.query(sql,[Club], callback);
// }
// module.exports.getClub_Position = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT Club_Position FROM footballers; ';
//     db.query(sql, callback);
// }
// module.exports.getByClub_Position = function(Club_Position,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where Club_Position=?; ';
//     db.query(sql,[Club_Position], callback);
// }
// module.exports.getClub_Kit = function(callback) {
//     // console.log(phc)
//     var sql = 'SELECT Club_Kit FROM footballers; ';
//     db.query(sql, callback);
// }
// module.exports.getByClub_Kit = function(Club_Kit,callback) {
//     // console.log(phc)
//     var sql = 'SELECT * FROM footballers where Club_Kit=?; ';
//     db.query(sql,[Club_Kit], callback);
// }

