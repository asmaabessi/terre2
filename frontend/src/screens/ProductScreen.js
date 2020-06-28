
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props){
    
    const [qty, setQty] = useState(1); 
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
           //
        };
    }, []);
    
    const handleAddToCart =() =>{
       props.history.push ("/cart/"+ props.match.params.id + "?qty=" + qty)

    }

    return <div className="page2">
        <div className="back-to-result">
            <Link className="link-name" to="/">retour au résultat</Link>
        </div>
        {loading? <div>Chargement...</div>:
        error? <div>{error}</div>: 
        (
          <div className="details">
            <div className="details-image">
            <img src={product.image} alt="product"/>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                       <h4> {product.name}</h4>
                    </li>
                    <li>
                        prix :€<b>{product.price}</b>
                    </li>
                    <li>
                        Description: 
                        <div>
                            {product.description}
                        </div>

                    </li>
                </ul>

            </div>

            <div className="details-action">
                <ul>
                    <li>
                        prix : €{product.price}
                    </li>
                    <li>
                        statut : {product.countInStock > 0? "En stock" : "En rupture de stock"}
                    </li>
                    <li>
                        
                        Qté : 
                        <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option key={x+1} value={x + 1}>{x + 1}</option>
                                )}
                        </select>
                    </li>
                   <li> 
                       {product.countInStock> 0 &&
                        <button onClick={ handleAddToCart} className="button" > ajout au panier</button>
                      }
                     

                   
                  </li> 
               </ul>

            </div>
        </div>  
        )
        
    
        }

        
       
    </div>
}

export default ProductScreen;