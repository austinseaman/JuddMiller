import React, { useState, useEffect, useContext }from 'react'
import { UserContext } from './context/userProvider'

const Product = (props) => {
    const [loader, setLoader] = useState('Loading')
    const { dataState: {merchData} } = useContext(UserContext)

    useEffect(() => {
        if(merchData === undefined){
            setLoader('Loading')
        }else {
            setLoader(merchData)
        }
    })

    let {merchName, merchImg, merchDesc, merchPrice} = props

    return (
        <div>
            {loader === 'Loading' ?
            <div>
                <p>Loading..</p>
            </div> :
            <>
            <div className="product-card">
                <img src={merchImg}></img>
                <h3>{merchName}</h3>
                <p>{merchDesc}</p>
                <p>${merchPrice}</p>
                <button className='btn'>Buy Now</button>
            </div> 
            </>
        }
        </div>
    )
}

export default Product