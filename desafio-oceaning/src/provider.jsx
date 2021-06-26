import React, { useState } from 'react';
import LoginContext from './context'

const Provider = ({ children }) => {
    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [selectedSkills, setSkills] = useState([]);
    const [addedDevelopers, setDeveloper] = useState([]);
    const skills = ['React','React Native','PHP','Java','Javascript','C#','C++','Ruby','CSS','HTML5','NodeJs']

    const handleName = (str) => {
        changeName(str)
    }

    const handleEmail = (str) => {
        changeEmail(str)
    }

    const handleSkills = (arr) => {
        setSkills((pastState) => ([...pastState, arr]))
    }

    const excludeSkill = (skill) => {
        const newArr = selectedSkills.filter((str) => str !== skill)
        setSkills(newArr)
    }

    const handleDeveloper = (obj) => {
        setDeveloper((pastState) => ([...pastState, obj]))
    }

    const resetState = () => {
        changeName('')
        changeEmail('')
        setSkills([])
    }

    const context = {
        name,
        email,
        selectedSkills,
        skills,
        handleName,
        handleEmail,
        handleSkills,
        excludeSkill,
        addedDevelopers,
        handleDeveloper,
        resetState,
    }

    return (
        <LoginContext.Provider value={ context }>
            { children }
        </LoginContext.Provider>
    )
}

export default Provider;