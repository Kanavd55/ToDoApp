const express=require('express');
const port=8000;
const app=express();

app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine','ejs');
app.set('views','./views');
const db=require('./config/mongoose');
const tasks=require('./models/task');

var task=[
    {
        desc:"Birthday Party",
        category:"Personal",
        date:"28/08/2022"
    },
    {
        desc:"Testing Completion",
        category:"Work",
        date:"15/10/2022"
    },
]

app.get('/',function(req,res){
    tasks.find({},function(err,task){
        if(err){
            console.log(err);
            return;
        }
        return res.render('home',{title:"my app",tasklist:task});
    })
})

app.post('/create-task',function(req,res){
    tasks.create({
        description:req.body.desc,
        category:req.body.category,
        date:req.body.date
    },function(err,newTask){
        if(err){
            console.log("Error in creating a task");
            return;
        }
        console.log("********",newTask);
        return res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log(`Error is ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})