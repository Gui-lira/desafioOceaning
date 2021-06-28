import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LoginContext from '../context';
import Header from '../components/header'

export default function SkillsPage() {
    const [inputSkill, setSkill] = useState('')
    const [skillsList, setVisibility] = useState(false)
    const { handleSkills, skills, selectedSkills, excludeSkill, name } = useContext(LoginContext);

    const handleButtons = ({target}) => {
        handleSkills(target.value)
    }

    const renderSkillsButtons = () => {
        if (inputSkill.length > 0) {
            const filteredSkills = skills.filter((skill) => skill.toLowerCase().includes(inputSkill.toLowerCase()));
            return (
                <div>
                    {filteredSkills.map((skill) => <button value={skill} className="buttonSkill" onClick={handleButtons}>{skill}</button>)}
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
            <div className={skillsList ? "SelectedSkills": 'none'}>
                <ul>
                    {selectedSkills.map((skill) => (
                        <li>
                          <p>{skill}</p>
                          <button 
                           value={skill} 
                           onClick={excludeButton}                           
                          >
                          excluir</button>
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
       <div className="container">
          <Header />
          <div className="main">
              <div>
                <h2>Olá,{`${name}`},</h2>
                <h1>Quais são suas habilidades?</h1>                  
                <input type="text" onChange={ handleInput } placeholder="Digite uma habilidade"/>
                { renderSkillsButtons() }
              </div>            
            <Link className="buttonLink" to="/register/end">Finalizar</Link>                        
         </div>
        <div className="container">
            <button className="buttonSelectedSkills" onClick={ handleVisibility }>
                {selectedSkills.length > 0 ? `${selectedSkills.length} habilidades adicionadas`: 'nenhuma habilidade adicionada'}
            </button>
            { handleList() }
        </div>
       </div>
    )
}