import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../components/header'
import  LoginContext  from '../context'

const NamePage = () => {
    const { handleName, handleEmail } = useContext(LoginContext)
    const [login, setlogin ] = useState({
        name: '',
        email: '',
    });
    const [isNameValid, setIsNameValid] = useState(true)
    const [emailOrName, setEmailOrName] = useState(true)    
    const [redirect, setRedirect] = useState(false)

    const handleInput = ({target}) => {
        setlogin((pastState) => ({
            ...pastState,
            [target.id]: target.value,
        }))
    }

    const handleButtonName = () => {
        if (login.name.length === 0) {
            setIsNameValid(false)
        } else {
            handleName(login.name);
            setIsNameValid(true)
            setEmailOrName(false)            
        }        
    }

    const handleButtonEmail = () => {
        if (login.email.length === 0) {
            setIsNameValid(false)
        } else {
            handleEmail(login.email)
            setRedirect(true)
        }
    }

    const loginForm = ( value, id, handleButton, placeholder ) => {
        return (
        <div className="main">
            <input
            type="text"
            id={ id }
            value={ value }
            onChange={ handleInput }
            placeholder={`Digite seu ${placeholder}`}
            />
            <button className="buttonLink"  type="button" onClick={ handleButton }>
                continuar
            </button>
        </div>
        )
    }

    return (
        <div>
            <Header/>
            <h2>vamos começar</h2>
            <h1>Como devemos te chamar?</h1>
            <p>nos diga como devemos te chamar e qual o seu email</p>
            {emailOrName ? loginForm(login.name, 'name', handleButtonName, 'nome'): loginForm(login.email, 'email', handleButtonEmail, 'email')}
            { redirect ? <Redirect to='/register/skills' /> : null } 
        </div>
    )
}

export default NamePage