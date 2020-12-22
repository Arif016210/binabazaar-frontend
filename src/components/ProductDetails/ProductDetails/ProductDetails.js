import React from 'react';
import ProductBottomPart from '../ProductBottomPart/ProductBottomPart';
import ProductTopPart from '../ProductTopPart/ProductTopPart';

const ProductDetails = () => {
    return (
        <div className="product-details-area">
            <ProductTopPart />
            <ProductBottomPart />
        </div>
    );
};

export default ProductDetails;