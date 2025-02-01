import React from "react";
import { Route, Routes } from "react-router-dom";
import { MY_ROUTES } from "../paths";
import { Contact, Home, Login, Register, Map, SearchPage } from "./pages";
import "./index.css";

function App() {
  const { HOME, CONTACT, LOGIN, REGISTER, MAP, SEARCH } = MY_ROUTES;
  return (
    <Routes>
      <Route index path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={CONTACT} element={<Contact />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={REGISTER} element={<Register />} />
      <Route path={SEARCH} element={<SearchPage />} />
      <Route path={MAP} element={<Map />} />
    </Routes>
  );
}

export default App;
