const mongoose=require('mongoose')

const Schema =mongoose.Schema;
const DetailsSchema = new Schema({
   
    Month: {
        type:String,
    } ,
   
    Status: {
        type:String,
    } ,
},
{timestamps:true});

module.exports= mongoose.model('Details', DetailsSchema);