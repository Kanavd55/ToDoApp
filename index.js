const express=require('express');
const port=8000;
const app=express();

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');
const db=require('./config/mongoose');

app.get('/',function(req,res){
    console.log(req.body);
    return res.render('home',{title:"my app"});
})

app.listen(port,function(err){
    if(err){
        console.log(`Error is ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})