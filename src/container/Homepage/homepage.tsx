import React from 'react'
import Navbar from '../../components/navbar/navbar'
import ItemList from '../../components/cart/card-list/cart-list'

const homepage = () => {
    return (
        <div className="homepage">
        <Navbar/>
        <ItemList/>
        </div>
    )
}

export default homepage
