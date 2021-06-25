import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/initialPage'
import NamePage from './pages/namePage'
import SkillsPage from './pages/skillsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register/name" component={ NamePage } />
        <Route path="/register/skills" component={ SkillsPage } />
        <Route path="/" component={ InitialPage } />        
      </Switch>     
    </div>
  );
}

export default App;
