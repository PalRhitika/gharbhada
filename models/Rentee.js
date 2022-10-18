const mongoose=require('mongoose')

const Schema =mongoose.Schema;
const RenteeSchema = new Schema({
   
    Fname: {
        type:String,
    } ,
   
    phone: {
        type:Number,
    } ,
    number_of_rooms: {
        type:Number,
    } ,
    price:{
        type:Number,
    } ,
    month:{
        type: String,
        
    },
    status:{
        type: String,
       
    }

},
{timestamps:true});

module.exports= mongoose.model('Rentee', RenteeSchema);