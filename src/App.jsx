import React from "react";
import { Route, Routes } from "react-router-dom";
import { MY_ROUTES } from "../paths";
import {
  Contact,
  Home,
  Login,
  Register,
  Map,
  SearchPage,
  About,
} from "./pages";
import "./index.css";
import { useState } from "react";

function App() {
  const { HOME, CONTACT, LOGIN, REGISTER, MAP, SEARCH, ABOUT } = MY_ROUTES;
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Routes>
      <Route
        index
        path={HOME}
        element={
          <Home showDetails={showDetails} setShowDetails={setShowDetails} />
        }
      />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={SEARCH} element={<SearchPage />} />
      <Route path={MAP} element={<Map />} />
      <Route path={ABOUT} element={<About />} />
    </Routes>
  );
}

export default App;
