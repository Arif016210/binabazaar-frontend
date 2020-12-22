import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFount from './components/NotFound/NotFount';
import KrishiBazaar from './components/KrishiBazaar/KrishiBazaar/KrishiBazaar';
import MudiBazar from './components/MudiBazar/MudiBazar/MudiBazar';
import FashionBazar from './components/FashionBazar/FashionBazar/FashionBazar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/krishiBazaar">
          <KrishiBazaar></KrishiBazaar>
        </Route>
        <Route path="/mudiBazaar">
          <MudiBazar></MudiBazar>
        </Route>
        <Route path="/fashionBazaar">
          <FashionBazar></FashionBazar>
        </Route>
        <Route path="*">
          <NotFount></NotFount>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
