// import UnderConstruction from "./UnderConstruction";
import "./App.css";

import Routes from "./Routes";

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
