import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import LoginContext  from '../context';

export default function DevelopersPage() {
    const { addedDevelopers } = useContext(LoginContext);
    const [isVisible, setVisibility] = useState({})

    const handleButtons = ({ target }) => {
        const bool = isVisible[target.value]
        setVisibility((pastState) => ({ 
            ...pastState,
            [target.value]: !bool,
        }))
    }

    useEffect(() => {
        addedDevelopers.forEach(developer => {
            setVisibility((pastState) => ({ ...pastState, [developer.name]: false}))
        })
    }, [])

    const renderDevelopers = () => {
      return  addedDevelopers.map((developer) => {            
            return (
                <div>
                    <span>{developer.name}</span>
                    <span>{developer.email}</span>
                    <span>{`${developer.selectedSkills.length} habilidades`}</span>
                    <span>{`recebido em ${developer.date}`}</span>
                    <button
                        onClick={ handleButtons }
                        value={ developer.name }
                    >VER HABILIDADES</button>
                    <div className={isVisible[developer.name] ? '' : 'none'}>
                        <ul>
                            {developer.selectedSkills.map((skill) => <li>{skill}</li>)}
                        </ul>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <Header />
            <div class="containerDevelopersPage">
                <h2>{`${addedDevelopers.length} desenvolvedores encontrados`}</h2>
                <Link className="buttonLink" to="/register/name">Adicionar</Link>
            </div>
            <div className="developersContainer">
                {renderDevelopers()}
            </div>
        </div>
    )
}