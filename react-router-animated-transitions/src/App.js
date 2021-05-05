import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import "./styles.css";

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
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}
    >
      <Switch location={displayLocation}>
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
