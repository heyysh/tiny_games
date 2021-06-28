import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardFlip from './Games/CardFlip';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <CardFlip />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
