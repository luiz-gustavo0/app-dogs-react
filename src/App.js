import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

import './app.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
