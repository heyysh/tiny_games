import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CardFlip from './Games/CardFlip';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/card-flip" component={CardFlip} />
    <Route exact path="/maze" component={Maze} />
    <Route path="/">
      <Redirect to="/card-flip" />
    </Route>

  </Switch>
)

function App() {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
}

const Maze = () => {
  return (
    <>Maze</>
  );
}
export default App;
