import React, { createContext, useState } from 'react';

const LoginContext = createContext();

const Provider = ({ children }) => {
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [selectedSkills, setSkills] = useState([]);
    const skills = ['React','React Native','PHP','Java','Javascript','C#','C++','Ruby','CSS','HTML5','NodeJs']

    const handleName = (str) => {
        changeName(str)
    }

    const handleEmail = (str) => {
        changeEmail(str)
    }

    const handleSkills = (arr) => {
        setSkills(...arr)
    }

    const context = {
        name,
        email,
        selectedSkills,
        skills,
        handleName,
        handleEmail,
        handleSkills,
    }

    return (
        <LoginContext.Provider value={ context }>
            { children }
        </LoginContext.Provider>
    )
}

export default Provider;