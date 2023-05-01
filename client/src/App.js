import Routes from "./components/Routes";
import { LoginContextProvider } from "./contexts/LoginContext.js";
import { RegisterContextProvider } from "./contexts/RegisterContext";

/**
 *To avoid bloated App.js component, page routes created at Routes.js component.
 */

function App() {
  return (
    <>
      <RegisterContextProvider>
        <LoginContextProvider>
          <Routes />
        </LoginContextProvider>
      </RegisterContextProvider>
    </>
  );
}

export default App;
