

var ProductModel= require('../models/items.models');





//add products
exports.addProduct=(req,res) => {
  console.log("server come here")

    var product=req.body;

    console.log('control comes here');

    var newProduct= new ProductModel(product);

     newProduct.save((err,p) => {
         if(err){
             res.send({'message':err.message})
         }
         else{
          if(p){
            res.status(200).send({'message':'product added successfully'});
       }
         }
       
     })
}

//update products
exports.updateProduct=(req,res) => {

    var productId=req.params.productId;
    console.log('pid',productId);
     var body=req.body;
     console.log('here in update product',body);

    ProductModel.find({productId:productId},(err,product) => {
        if(err){
            res.send(err.message)
        }
        else
        {
            console.log('product',product);
        if(product.length !=0){
            ProductModel.updateOne({productId:productId},body,(err,raw) => {
                  console.log('raw',raw);
                if(err){
                    res.send('error',err.message);
                }
                if(raw.nModified == 1){
                     res.send('product modified');
                }
                else
                {
                    res.send('updating product is failed');
                }
            })
        }
        else
        {
           
                res.send('product not found');
        }
    }
        
    })


}

//delete products
exports.deleteProduct = (req,res) => {

    var productId=req.params.productId; 
    ProductModel.findOne({productId:productId},(err, doc) => {
    if(err){
      console.log('error',err);
    }
     if(doc){
        ProductModel.findOneAndDelete({productId:productId},(err, raw) =>{
          if(err){
            console.log(err);
        }
        else
        {
          res.send({'message':'product deleted successfully'})
        }
        })
      
    }
    else{
      res.send({'message':'something went wrong....!!! '});
     }

})

}

// list all products
exports.listProducts= (req,res) =>{

    ProductModel.find(function(err,doc){
        if(err){
          res.send({'message': err.message})
        }
        else{
          res.send(doc)
         // console.log('data shown');
        }
      })
}

// list products by productid

 exports.listProductById = (req,res)=>{
  var productId=req.params.productId;
  ProductModel.findOne({'productId':req.params.productId},function(err,doc){
    if(err){
      res.send({'error':"error occured"})
    }
    else{
      res.send(doc)
    }
  })
}


