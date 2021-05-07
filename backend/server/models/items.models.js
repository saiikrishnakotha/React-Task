var mongoose= require('mongoose');

  var Schema=mongoose.Schema;

var ProductSchema =new Schema({
          productId: {
              type:Number,
              index:true,
              unique:true,
              required:[true,'productId required']
          },
          name: {
              type:String,
              required:[true,'name required']
          },
          price : {
              type:Number,
              required:[true,'price required']
          },
          offerprice : {
              type : Number,
              required : [true,'offerprice required']
          },
          imagUrl:{
              type:String,
              required:[true,'Image URL Required']
          },
          category:{
              type:String,
              required: [true,'Category Required']
          },
         
          description:{
              type:String,
              required: [true,'seller required']
          },
         
    });

module.exports=mongoose.model('proditems',ProductSchema);
