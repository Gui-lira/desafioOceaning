import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/initialPage'
import NamePage from './pages/namePage'
import SkillsPage from './pages/skillsPage';
import EndPage from './pages/EndPage'
import DevelopersPage from './pages/DevelopersPage';


function App() {
  return (
    <div 
    className="App"   
    >
      <Switch>
        <Route path="/developers" component={ DevelopersPage } />
        <Route path="/register/end" component={ EndPage } />
        <Route path="/register/name" component={ NamePage } />
        <Route path="/register/skills" component={ SkillsPage } />
        <Route path="/" component={ InitialPage } />        
      </Switch>     
    </div>
  );
}

export default App;
