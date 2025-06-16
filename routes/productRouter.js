import express from 'express';
import { createProduct, getProducts,deleteProduct,updateProduct, getProductById } from '../controllers/productController.js';

const productRouter=express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProducts)  
productRouter.get("/:id",getProductById)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)

export default productRouter;