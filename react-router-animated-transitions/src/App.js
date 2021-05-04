import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
        <nav>
          <Link to="/">Home</Link> <Link to="/other">Other</Link>
        </nav>
        <Content />
      </div>
    </BrowserRouter>
  );
}

function Content() {
  return (
    <div>
      <Switch>
        <Route path="/other">
          <section>other</section>
        </Route>
        <Route path="/">
          <section>home</section>
        </Route>
      </Switch>
    </div>
  );
}
