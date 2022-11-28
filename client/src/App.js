//import UnderConstruction from "./UnderConstruction";
import Routes from "./components/Routes";

import "./App.css";

/**
 *To avoid bloated App.js component, page routes created at Routes.js component.
 */

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
