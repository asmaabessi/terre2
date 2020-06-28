import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveProduct,listProducts,deleteProduct } from '../actions/productActions';
// import { signin } from '../actions/userActions';


function ProductsScreen(props){
 const [modalVisible, setModalVisible] = useState(false);
 const [id,setId] = useState('');
 const [name,setName] = useState('');
 const [price, setPrice] = useState('');
 const [image, setImage] = useState('');
 const [brand, setBrand] = useState('');
 const [category, setCategory] = useState('');
 const [countInStock, setCountInStock] = useState('');
 const [description, setDescription] = useState('');
 const productList = useSelector(state => state.productList);
 const {loading, products, error} = productList;

 const productSave = useSelector((state) => state.productSave);
 const {
    loading: loadingSave,
    success: successSave,
    error: errorSave
  } = productSave;

 const productDelete = useSelector((state) => state.productDelete);
 const {
   loading: loadingDelete,
   success: successDelete,
   error: errorDelete,
 } = productDelete;
 const dispatch = useDispatch();


    useEffect(() => {
        if(successSave){
            setModalVisible(false);
        }
       dispatch(listProducts());
        return () => {
           //
        };
    }, [successSave, successDelete]);

const openModal = (product) => {
  setModalVisible(true);  
  setId(product._id);
  setName(product.name);
  setPrice(product.price);
  setDescription(product.description);
  setImage(product.image);
  setBrand(product.brand);
  setCategory(product.category);
  setCountInStock(product.countInStock);
}
const submitHandler  =(e) => {
    e.preventDefault();
    dispatch(saveProduct({
        _id: id,
          name,
          price,
          image,
          brand,
          category,
          countInStock,
          description,
        })
      );

}
const deleteHandler = (product) =>{
    dispatch(deleteProduct(product._id));
}
    return <div className="content content-margined" >

        <div className="product-header">
            <h3>produits</h3>
            <button className="button primary" onClick={() => openModal ({})}>crée un produit</button>
        </div>
     {modalVisible && 
     <div className="form">
     <form onSubmit= { submitHandler }>
         <ul className="form-container">
             <li>
                 <h2>crée un produit:</h2>
             </li>
             <li>
                 {loadingSave && <div>chargement...</div>}
                 {errorSave && <div>{errorSave}</div>}
             </li>

             
             <li>
              <label htmlFor="name">
                  nom 
              </label>
              <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
             </li>

             <li>
              <label htmlFor="price">
                  Prix
              </label>
              <input type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
              </input>
             </li>


             <li>
              <label htmlFor="image">
                  Image
              </label>
              <input type="text" name="Image" id="Image" value={image} onChange={(e) => setImage(e.target.value)}>
              </input>
             </li>



             <li>
              <label htmlFor="brand">
               désignation
              </label>
              <input type="text" name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
              </input>
             </li>


             <li>
              <label htmlFor="countInStock">
               stock
              </label>
              <input type="text" name="countInStock" id="countInStock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}>
              </input>
             </li>




             <li>
              <label htmlFor="category">
                  catégorie 
              </label>
              <input type="text" name="category" id="category" value={category}  onChange={(e) => setCategory(e.target.value)}>
              </input>
             </li>


             <li>
              <label htmlFor="description">
                  description 
              </label>
              <textarea type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}>
              </textarea>
             </li>


            <li>
              <button type="submit" className="button primary">{id ?"modifier":"création"} </button>
            </li>

            <li>
              <button type="button"  onClick={()=>setModalVisible(false)} className="button primary">retour </button>
            </li>


         </ul>
     </form>
 </div>
     }

        
        
        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>catégorie</th>
                        <th>désignation</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => 
                 <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <button className="button" onClick={()=>openModal(product)}>Editer</button> 
                            {' '}
                            <button className="button" onClick={()=>deleteHandler(product)}>supprimer</button> 
                            
                            
                        </td>
                       
                    </tr> )}
                </tbody>
            </table>

        </div>
    </div>
}

export default ProductsScreen;