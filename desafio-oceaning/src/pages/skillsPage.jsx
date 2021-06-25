import React, { useState, useContext } from 'react';
import LoginContext from '../context';

export default function SkillsPage() {
    const [inputSkill, setSkill] = useState('')
    const [skillsList, setVisibility] = useState(false)
    const { handleSkills, skills, selectedSkills, excludeSkill } = useContext(LoginContext);

    const handleButtons = ({target}) => {
        handleSkills(target.value)
    }

    const renderSkillsButtons = () => {
        if (inputSkill.length > 0) {
            const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(inputSkill.toLowerCase()));
            return (
                <div>
                    {filteredSkills.map((skill) => <button value={skill} onClick={handleButtons}>{skill}</button>)}
                </div>
            )
        }
    }

    const handleInput = ({target}) => {
        setSkill(target.value)
    }

    const excludeButton = ({target}) => {
        excludeSkill(target.value)
    }

    const handleList = () => {
        return (
            <div className={skillsList ? '': 'none'}>
                <ul>
                    {selectedSkills.map((skill) => (
                        <li>
                          <p>{skill}</p>
                          <button value={skill} onClick={excludeButton}>excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const handleVisibility = () => {
        setVisibility(!skillsList)
    }


    return (
       <div>
            <div>
            <input type="text" onChange={ handleInput } placeholder="Digite uma habilidade"/>
            { renderSkillsButtons() }            
        </div>
        <div>
            <button onClick={ handleVisibility }>
                {selectedSkills.length > 0 ? `${selectedSkills.length} habilidades adicionadas`: 'nenhuma habilidade adicionada'}
            </button>
            { handleList() }
        </div>
       </div>
    )
}