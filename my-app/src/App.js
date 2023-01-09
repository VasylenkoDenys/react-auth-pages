import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Switch>
      <Route path='/' exact component={LoginPage} />
      <Route path='/registration' component={RegisterPage}/>
    </Switch>
  );
}

export default App;
