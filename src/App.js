import './App.css';
import { BrowserRouter as Router , Switch , Route} from "react-router-dom";

import Navbar from "./Navbar";
import Content from "./Content";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/">
            <Navbar/>
            <Content/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
