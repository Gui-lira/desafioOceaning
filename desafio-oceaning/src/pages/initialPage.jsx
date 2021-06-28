import { Link } from 'react-router-dom';
import Header from '../components/header'

const InitialPage = () => {
    return (
        <div className="container">
            <Header />
            <div className="textContainer">
                <h2>Time de desenvolvimento</h2>
                <h1>Sua evolução começa agora</h1>
                <p>Faça parte dessa jornada junto com a oceaning e conquiste 
                    <br/>
                    mundo com suas habilidades de programação
                </p>
            </div>
            <div className="buttonConatiner">
              <Link className="buttonLink" to='/register/name'>Começar agora</Link>
            </div>
        </div>
    )
}

export default InitialPage;