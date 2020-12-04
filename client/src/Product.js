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
            <div>
                <h1>{merchName}</h1>
                {/* <img src={merchImg}></img> */}
                <p>{merchDesc}</p>
                <p>{merchPrice}</p>
            </div> 
            </>
        }
        </div>
    )
}

export default Product