import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/initialPage'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={ InitialPage } />
      </Switch>
     
    </div>
  );
}

export default App;
