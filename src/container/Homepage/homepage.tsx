import React from 'react'
import Navbar from '../../components/navbar/navbar'
import ItemList from '../../components/cart/card-list/cart-list'

const Homepage = () => {
    return (
        <div className="homepage">
        <Navbar/>
        <ItemList/>
        </div>
    )
}

export default Homepage
