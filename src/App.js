import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserStorage } from './context/UserContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';

import './app.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/conta'>
              <User />
            </Route>
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
