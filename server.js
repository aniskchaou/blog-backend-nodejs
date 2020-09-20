const client=require('./db/db.js');
const express=require('express');
const path=require('path');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/all",(req,res)=>{

   client.query('SELECT * from posts order by id desc', (err, result) => {
      if (err){
      	console.log(err);
        res.send({success:false,result:err});
      }else
      {
        res.send({success:true,result:result.rows});
      }
  });
});

app.post("/add",(req,res)=>{

const post={
	title:req.body.title,
	post:req.body.post,
	author:req.body.author,
	date:req.body.date,
  image:req.body.image
};
console.log(post);

client.query("INSERT INTO posts (title, post,author,image,date) VALUES ('"+post.title+"','"+post.post+"','"+post.author+"','"+post.image+"','"+post.date+"')",(err, result) => {
      if (err){
        console.log(err);
        res.send({success:false,result:err});
      }else
      {
        res.send({success:true,result:result});
      }
  });
    
});


app.post("/edit",(req,res)=>{

const post={
  id:req.body.id,
  title:req.body.title,
  post:req.body.post,
  author:req.body.author,
  date:req.body.date,
  image:req.body.image
};


client.query("UPDATE posts SET image='"+post.image+"', title='"+post.title+"', post='"+post.post+"', author='"+post.author+"',date='"+post.date+"' WHERE id="+post.id,(err, result) => {
      if (err){
        console.log(err);
        res.send({success:false,result:err});
      }else
      {
        res.send({success:true,result:result});
      }
  });
    
});



app.post("/delete",(req,res)=>{

const post={
  id:req.body.id,
};
console.log(post);

client.query("DELETE FROM posts WHERE id="+post.id,(err, result) => {
      if (err){
        console.log(err);
        res.send({success:false,result:err});
      }else
      {
        res.send({success:true,result:result});
      }
  });
    
});


app.listen(process.env.PORT||3000,err=>{
if(err) console.error(err);
console.log("server started at : ", process.env.PORT||3000)
});
