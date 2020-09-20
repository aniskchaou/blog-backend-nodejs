const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'blog',
    password: 'root',
    port: 5432,
});

client.connect();

const queryCreateDb = "CREATE TABLE posts (id SERIAL PRIMARY KEY,title varchar,post varchar,author varchar,image varchar,date varchar)";

/*
client
.query(queryCreateDb)
.then(res => {
    console.log('Table is successfully created');
})
.catch(err => {
    console.error(err);
})
.finally(() => {
    initDb()

});

initDb()
*/
function initDb()
{
    queryInsertDb="INSERT INTO posts (title, post,author,image,date)VALUES ('Lorem Ipsum','Duis cursus orci sapien, vel porttitor odio fringilla eget. Donec aliquet nunc dolor, in pulvinar dolor efficitur vel. Cras molestie tortor quis eros elementum, ut convallis ipsum tempor.','imperdiet velit','https://picsum.photos/200/300','2020-08-09'),('mattis quis','Suspendisse tempus magna a tellus vehicula, ac viverra velit mattis. Vivamus tristique euismod diam, non luctus magna. Donec libero dui','George','https://picsum.photos/200/300','2020-06-23'),(title, post,author,image,date)VALUES ('Lorem Ipsum','Duis cursus orci sapien, vel porttitor odio fringilla eget. Donec aliquet nunc dolor, in pulvinar dolor efficitur vel. Cras molestie tortor quis eros elementum, ut convallis ipsum tempor.','imperdiet velit','https://picsum.photos/200/300','2020-08-09'),('mattis quis','Suspendisse tempus magna a tellus vehicula, ac viverra velit mattis. Vivamus tristique euismod diam, non luctus magna. Donec libero dui','George','https://picsum.photos/200/300','2020-06-23')";
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
}


module.exports=client;    