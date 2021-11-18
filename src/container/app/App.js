import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import AppRoutes from "../../config/routes";

function App() {
  return (
    <Router>
      <Switch>
        {AppRoutes.map((route) => (
          <Route key={route.id} {...route}></Route>
        ))}
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
