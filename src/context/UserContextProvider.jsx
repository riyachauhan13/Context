import React from 'react'
import UserContext from './UserContext'

const UserContextProvider=({children})=>{
    const [user, setUser] = React.useState(null)
    const [imgUrl, setImgUrl] =React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser, imgUrl, setImgUrl}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider