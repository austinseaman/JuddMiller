import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/userProvider'
import Product from './Product'

const ProductList = () => {
    const { getData, dataState: {merchData} } = useContext(UserContext)

    useEffect(() => {
        getData()
    }, [])

    const mappedProducts = merchData.map(product => {
        return <Product key={product._id}
                        merchName={product.merchName}
                        merchImg={product.merchImg}
                        merchDesc={product.merchDesc}
                        merchPrice={product.merchPrice}
                />
    })
    
    return (
        <div className="products">
            {mappedProducts}
        </div>
    )
}

export default ProductList