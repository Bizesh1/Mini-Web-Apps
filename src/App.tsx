import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageTitle from "./components/PageTitle";
import Home from "./Pages/Home";
import Nav from "./Pages/Nav";
import LightToggle from "./Apps/LightToggle";
import TodoList from "./Apps/TodoList";
import Counter from "./Apps/Counter";
import PasswordValidator from "./Apps/PasswordValidator";
import Weather from "./Apps/Weather";
import GithubUsers from "./Apps/GithubUsers";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/LightToggle"
            element={
              <>
                <PageTitle title="Light Toggle" />
                <LightToggle />
              </>
            }
          />
          <Route
            path="/TodoList"
            element={
              <>
                <PageTitle title="Todo List" />
                <TodoList />
              </>
            }
          />
          <Route
            path="/Counter"
            element={
              <>
                <PageTitle title="Counter" />
                <Counter />
              </>
            }
          />
          <Route
            path="/PasswordValidator"
            element={
              <>
                <PageTitle title="Password Validator" />
                <PasswordValidator />
              </>
            }
          />
          <Route
            path="/Weather"
            element={
              <>
                <PageTitle title="Weather" />
                <Weather />
              </>
            }
          />
          <Route
            path="/GithubUsers"
            element={
              <>
                <PageTitle title="Github Users" />
                <GithubUsers />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
