const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: 'root',
    port: 5432,
});

client.connect();
/*
const queryCreateDb = `
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title varchar,
    post varchar,
    author varchar,
    date varchar
    );


client
.query(queryCreateDb)
.then(res => {
    console.log('Table is successfully created');
})
.catch(err => {
    console.error(err);
})
.finally(() => {
    //initDb()

});
*/
initDb()
function initDb()
{
    queryInsertDb=`INSERT INTO posts 
    (title, post,author,date)
    VALUES ('hgfjhjg','Jerry','kggjhg','Lyon'),
    ('jhgkj','George','0665876','Paris');`;
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
}



function addPost (post) {
    client.query(``).catch(err => {
        console.error(err);
    });
}

function getPost (id) {
    client.query('SELECT $1::text as name',(err, res) => {
      if (err) throw err
          console.log(res)
      client.end()
  })
}

function updatePost (id) {
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
}

function deletePost (id) {
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
}

module.exports=client;    