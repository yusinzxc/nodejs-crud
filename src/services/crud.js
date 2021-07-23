module.exports = {
  create: function(usern, passw, date, time, ip_address){
    return `INSERT INTO users VALUES (null, '${usern}', '${passw}', '${date}', '${time}', '${ip_address}')`
  },
  read: function(id){
    return `SELECT * FROM users WHERE id = ${id}`
  },
  update: function(passw,id){
    return `UPDATE users SET passw = '${passw}' WHERE id = ${id}`
  },
  del: function(id){
    return `DELETE FROM users WHERE id = ${id}`
  }
}
