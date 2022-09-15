const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

const tasks=mongoose.model('tasks',taskSchema);
module.exports=tasks;