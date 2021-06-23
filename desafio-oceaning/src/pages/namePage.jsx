import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Header from '../components/header'
import  LoginContext  from '../context'

const NamePage = () => {
    const { handleName } = useContext(LoginContext)
    const [name, setname ] = useState('');
    const [isNameValid, setIsNameValid] = useState(true)
    const [redirect, setRedirect] = useState(false)

    const handleInput = ({target}) => {
        setname(target.value)
    }

    const handleButton = () => {
        if (name.length === 0) {
            setIsNameValid(false)
        } else {
            handleName(name);
            setRedirect(true)
        }        
    }

    return (
        <div>
            <Header/>
            <h2>vamos começar</h2>
            <h1>Como devemos te chamar</h1>
            <p>nos diga como devemos te chamar e qual o seu email</p>
            <input
            type="text"
            onChange={ handleInput }
            placeholder="Digite seu Nome"
            />
            <button type="button" onClick={ handleButton }>
                continuar
            </button>
            { redirect ? <Redirect to='/register/email' /> : null } 
        </div>
    )
}

export default NamePage