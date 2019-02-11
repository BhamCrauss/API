
let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'chirpr',
  password: 'chirpr',
  database: 'chirpr'
});
 
connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
 
  let createTodos = `create table if not exists todos(
                          id int primary key auto_increment,
                          title varchar(255)not null,
                          completed tinyint(1) not null default 0
                      )`;
 
  connection.query(createTodos, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
 
});





/*
  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BeGre@t2019',
    database: 'chirpr'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

let createTodos = `create table if not exists todos(
  id int primary key auto_increment,
  title varchar(255)not null,
  completed tinyint(1) not null default 0
)`;

connection.query(createTodos, function(err, results, fields) {
if (err) {
console.log(err.message);
}
});

///////////////////<above stuff is good> //////////////////////////////////////



app.get('/em/:id', (req, res) => {
  conncection.query('SELECT * From _____ WHERE id = ?', [req.params.id], (err, rows, fields) =>{
    if(err)
      res.send(rows);
    else
      console.log(err);
  })
});




*/