import React from 'react';
import ListProduct from './ListProduct';


const Product = (props) =>{
    return(
        <div>
            <h1>Silahkan melihat-lihat produk kami</h1>
            <div>{ListProduct}</div>
        </div>
    )
}

export default Product;