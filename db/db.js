const { Client } = require('pg');

const client = new Client({
    user: 'ytdqafmamwhqwf',
    host: 'ec2-3-216-92-193.compute-1.amazonaws.com',
    database: 'd49alk7j6atcra',
    password: '624f36c102e3b9a941f9d25c34bb7d9c3cfb7178cef7b5f727792f4c5596ae85',
    port: 5432,
    ssl: true
});

client.connect();

const queryCreateDb = "CREATE TABLE posts (id SERIAL PRIMARY KEY,title varchar,post varchar,author varchar,image varchar,date varchar)";


client
    .query(queryCreateDb)
    .then(res => {
        console.log('Table is successfully created');
    })
    .catch(err => {
        console.error(err);
        throw err
    })
    .finally(() => {
        // initDb()

    });

//initDb()

function initDb() {
    queryInsertDb = "INSERT INTO posts (title, post,author,image,date)VALUES ('Lorem Ipsum','Duis cursus orci sapien, vel porttitor odio fringilla eget. Donec aliquet nunc dolor, in pulvinar dolor efficitur vel. Cras molestie tortor quis eros elementum, ut convallis ipsum tempor.','imperdiet velit','https://picsum.photos/200/300','2020-08-09'),('mattis quis','Suspendisse tempus magna a tellus vehicula, ac viverra velit mattis. Vivamus tristique euismod diam, non luctus magna. Donec libero dui','George','https://picsum.photos/200/300','2020-06-23'),('Lorem Ipsum','Duis cursus orci sapien, vel porttitor odio fringilla eget. Donec aliquet nunc dolor, in pulvinar dolor efficitur vel. Cras molestie tortor quis eros elementum, ut convallis ipsum tempor.','imperdiet velit','https://picsum.photos/200/300','2020-08-09'),('mattis quis','Suspendisse tempus magna a tellus vehicula, ac viverra velit mattis. Vivamus tristique euismod diam, non luctus magna. Donec libero dui','George','https://picsum.photos/200/300','2020-06-23')";
    client.query(queryInsertDb).catch(err => {
        console.error(err);
    });
}


module.exports = client;
