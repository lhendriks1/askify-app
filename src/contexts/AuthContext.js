import React, {useState} from 'react'
export const AuthContext = React.createContext({})

export const AuthContextProvider = props => {
    const {children} = props

    const [loginStatus, setLoginStatus] = useState(false)
    const [registrationMsg, setRegistrationMsg] = useState('')
    const [error, setError] = useState(null)


    const updateLoginStatus = (status) => {
        setLoginStatus(status)
    }

    const updateRegistrationMsg = (message) => {
        setRegistrationMsg(message)
    }

    const updateErrorMsg = (message) => {
        setError(message)
    }

    const authContext = {
        loginStatus,
        updateLoginStatus,
        registrationMsg,
        updateRegistrationMsg,
        error,
        updateErrorMsg
    }

    return(
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
}

export const {Consumer} = AuthContext;