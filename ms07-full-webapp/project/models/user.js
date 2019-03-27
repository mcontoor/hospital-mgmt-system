var mongoose= require('mongoose')
var Schema=mongoose.Schema
var userSchema= new Schema({
    firstname :{
        type:string,
        required:true,
        
    },
    lastname:{
        type:string,
        required:true,
    
    },
     username:{
         type:String,
         required:true,
         unique:true
     },
     password:{
         type:string,
         required:true,
     },
     age:{
         type:number,
         required:true
     },
     emailId:{
           type:string,
           required:true
     }
});
module.exports=mongoose.model('user',userSchema);