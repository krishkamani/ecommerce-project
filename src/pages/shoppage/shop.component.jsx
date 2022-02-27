import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../component/collection-preview/collection-preview.component.jsx";
import { selectShopItems } from "../../redux/shop/shop.selectors.js";

const ShopPage = ({collections}) => {
   
        return (
            <div className="shop-page">
            {
                collections.map(({id, ...otherCollectionProps})=>(
                    <CollectionPreview key={id} {...otherCollectionProps}  />
                ))
            }
            </div>
        ); 
}

const mapStateToProps = createStructuredSelector({
    collections : selectShopItems
})

export default connect(mapStateToProps)(ShopPage);