import React, { useState, useEffect, useContext }from 'react'
import { UserContext } from './context/userProvider'

const Product = (props) => {
    const [loader, setLoader] = useState('Loading')
    const { token, editProduct, dataState: {merchData} } = useContext(UserContext)
    const [merchInfo, setMerchInfo] = useState({merchName: '', merchDesc: '', merchPrice: 0})

    useEffect(() => {
        if(merchData === undefined){
            setLoader('Loading')
        }else {
            setLoader(merchData)
        }
    })

    let {id, merchName, merchImg, merchDesc, merchPrice} = props

    const handleChange = (e) => {
        setMerchInfo({...merchInfo, merchName: e.target.value})
    }
    const handleChange2 = (e) => {
        setMerchInfo({...merchInfo, merchDesc: e.target.value})
    }
    const handleChange3 = (e) => {
        setMerchInfo({...merchInfo, merchPrice: e.target.value})
    }
    const editClick = () => {
        editProduct(merchInfo.merchName, merchInfo.merchDesc, merchInfo.merchPrice, id)
        alert`Product successfully updated, log out to verify changes.`
    }
    
// When an end user adds an item to cart, setItem in local storage, getItem from local storage on cart page.
// Set up what this page looks like with a token

    // const addClick = (product) => {
    //     localStorage.setItem(product)
    // }
    const numStyle = {
        width: '50px'
    }
    return (
        <div>
            {loader === 'Loading' ?
                <div>
                    <p>Loading..</p> 
                </div>
                :
                <>
                    {token ?
                    <div className="product-card">
                        <img src={merchImg}></img>
                        <input type="text" placeholder="Name" onChange={handleChange}/>
                        <input type="text" placeholder="Product Description" onChange={handleChange2}/>
                        <input type="number" placeholder="0" style={numStyle} onChange={handleChange3}/>
                        <div className="prod-btn">
                            <button className="btn" onClick={editClick}>Save</button>
                    </div>
                        {/* <img src={merchImg}></img>
                        <h3>{merchName}</h3>
                        <p>{merchDesc}</p>
                        <p><b>${merchPrice}</b></p>
                        <div className="prod-btn">
                            <button className='btn'>Add to Cart</button>
                        </div> */}
                    </div> :
                    <div className="product-card">
                        <img src={merchImg}></img>
                        <h3>{merchName}</h3>
                        <p>{merchDesc}</p>
                        <p><b>${merchPrice}</b></p>
                        <div className="prod-btn">
                            <button className='btn'>Add to Cart</button>
                        </div>
                    </div> 
                    }
                    
                </>
        }
        </div>
    )
}

export default Product