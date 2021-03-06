import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from './context/userProvider'

const Bio = () => {
    const { token, getData, editBio, dataState: {bioData} } = useContext(UserContext)
    const [loader, setLoader] = useState('Loading')

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if(bioData[0]?._id === undefined){
            setLoader('Loading')
        }else {
            setLoader(bioData[0]?._id)
        }
    })

    
    const [newBioText, setNewBioText] = useState()

    const handleChange = (e) => {
        setNewBioText(e.target.value)
    }

    const handleUpdate = () => {
        editBio(newBioText, bioData[0]._id)
        alert`Bio successfully updated. :)`
    }

    const taStyles = {
        fontSize: '20px',
        width: '800px',
        height: '400px',
        overflow: 'hidden'
    }
    
    return (
        <div className='bio'>
            <h1>About Me</h1>
            <div className='bio-content'>
                {loader === 'Loading' ?
                    <div>
                        <p>Loading...</p>
                    </div>
                    :
                    <>
                        {token ? 
                        <div className="editBio">
                            <textarea value={newBioText} onChange={handleChange} name="about" id="aboutMe" style={taStyles}>{bioData[0].bioText}</textarea>
                            <br/>
                            <button className="btn" onClick={handleUpdate}>Save</button>
                        </div>
                        :
                        <div>
                            <h3>{bioData[0].bioText}</h3>
                        </div>}
                    </>
                }
            </div>
        </div>
    )
}

export default Bio