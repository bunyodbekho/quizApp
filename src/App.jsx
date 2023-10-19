import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Heading, Flex, Link, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const tempData = {
  main: "Main",
  tests: "Tests",
  groups: "Groups",
};

function App() {
  return (
    <Router>
      <div className="app">
        <Flex flexDirection={"column"}>
          <div className="maincomp">
            <Routes>
              <Route
                path="/"
                element={<Header>{tempData.main}</Header>}
              ></Route>
              <Route
                path="/tests"
                element={<Header>{tempData.tests}</Header>}
              ></Route>
              <Route
                path="/groups"
                element={<Header>{tempData.groups}</Header>}
              ></Route>
            </Routes>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
        </Flex>
      </div>
    </Router>
  );
}

export default App;
