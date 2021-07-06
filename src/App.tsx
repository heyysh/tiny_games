import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CardFlip from './Games/CardFlip';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/card-flip" component={CardFlip} />
        <Route path="/maze" component={Maze} />
        <Route path="/" component={CardFlip} />
      </Switch>
    </Router>
  );
}

const Maze = () => {
  return (
    <>Maze</>
  );
}
export default App;
