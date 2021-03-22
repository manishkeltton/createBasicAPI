import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Products from './pages/Products';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={Profile}/>
            <Route path='/products' component={Products} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
