import express from 'express';
import Product from '../models/productModel '; 
import { isAuth, isAdmin } from '../util';
// import { getToken ,isAuth} from '../util';



const router = express.Router();




router.get("/", async(req, res) =>{
const products = await Product.find({});
 res.send(products);
});


router.get("/:id", async(req, res) =>{
    const products = await Product.findOne({_id: req.params.id});
    if(product){
      res.send(product);
    } else {
        res.status(404).send({message: " "})
    }
   
    });
 
 router.put("/:id" , async(req, res) =>{
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product){
          
            product.name = req.body.name;
            product.price = req.body.price;
            product.image = req.body.image;
            product.brand = req.body.brand;
            product.category = req.body.category;
            product.countInStock = req.body.countInStock;
            product.description = req.body.description;  
            const updatedProduct = await product.save();
            
    if(updatedProduct){
        return res.status(200).send({message:' produit modifier', data: updatedProduct});
    } 
}
    return res.status(500).send({message: ' erreur lors de la modification du produit.' });
});

router.delete("/:id", async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if(deletedProduct){
      await deletedProduct.remove();
      res.send({message:"produit supprimer"});
  } else{
        res.send("erreur lors de la suppression")
  }

});

router.post('/', async (req, res) => {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      brand: req.body.brand,
      category: req.body.category,
      countInStock: req.body.countInStock,
      description: req.body.description,
     
    });
    const newProduct = await product.save();
    if (newProduct) {
      return res
        .status(201)
        .send({ message: 'produit crée', data: newProduct });
    }
    return res.status(500).send({ message: ' erreur lors la création du produit.' });
  });
  



   export default router ;

