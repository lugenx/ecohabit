import Routes from "./components/Routes";
import { LoginContextProvider } from "./contexts/LoginContext.js";

/**
 *To avoid bloated App.js component, page routes created at Routes.js component.
 */

function App() {
  return (
    <>
      <LoginContextProvider>
        <Routes />
      </LoginContextProvider>
    </>
  );
}

export default App;
