import Routes from "./components/Routes";
import { LoginContextProvider } from "./contexts/LoginContext.js";
import { RegisterContextProvider } from "./contexts/RegisterContext";
import { UserContextProvider } from "./contexts/UserContext";

/**
 *To avoid bloated App.js component, page routes created at Routes.js component.
 */

 // This is a change made by a human - one of the last of its kinds

function App() {
  return (
    <>
      <RegisterContextProvider>
        <LoginContextProvider>
          <UserContextProvider>
            <Routes />
          </UserContextProvider>
        </LoginContextProvider>
      </RegisterContextProvider>
    </>
  );
}

export default App;
