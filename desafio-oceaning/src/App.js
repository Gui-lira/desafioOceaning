import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/initialPage'
import NamePage from './pages/namePage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register/name" component={ NamePage } />
        <Route path="/" component={ InitialPage } />        
      </Switch>
     
    </div>
  );
}

export default App;
