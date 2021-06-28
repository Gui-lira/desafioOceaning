import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import LoginContext  from '../context'

export default function EndPage() {
    const {handleDeveloper, name, email, selectedSkills, resetState } = useContext(LoginContext)

    useEffect(() => {
        const sendDeveloper = () => {
            let date = new Date(Date.now()).toLocaleString().split(',')[0]
            date = date.split(' ')[0]
            const developer = {
                name,
                email,
                selectedSkills,
                date,
            };            
            handleDeveloper(developer);
            resetState();
        };
        sendDeveloper();
    }, [])

    return (
        <div className="container">
            <Header />
            <h2>Parabens</h2>
            <h1>Suas habilidades foram enviadas</h1>
            <p>Faça parte dessa jornada junto coma oceaning e conquiste o
                <br/>
                e conquiste o mundo com suas habilidades de programação
            </p>
            <Link className="buttonLink" to='/developers'>Ver todos</Link>
        </div>
    )
}