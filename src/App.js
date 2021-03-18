import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UserStorage } from './context/UserContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import User from './components/User';

import './app.css';
import ProtectedRouter from './components/ProtectedRouter';

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
            <ProtectedRouter path='/conta' component={User} /> >
          </Switch>
          {/* <Footer /> */}
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
