const client=require('./db/db.js');
const express=require('express');
const path=require('path');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/all",(req,res)=>{
   client.query('SELECT * from posts', (err, result) => {
      if (err){
      	console.log(err);
        res.send({success:false,result:err});
      }else
      {
        res.send({success:true,result:result.rows});
      }
      
     // client.end()
  });
});

app.post("/add",(req,res)=>{
const post={
	title:res.body.title,
	post:res.body.post,
	author:res.body.author,
	date:res.body.date
};

client.query(`INSERT INTO posts 
    (title, post,author,date)
    VALUES (post.title,post.post,post.author,post.date)`).catch(err => {
        console.error(err);
    });

});


app.listen(process.env.PORT||3000,err=>{
if(err) console.error(err);
console.log("server started at : ", process.env.PORT||3000)
});
