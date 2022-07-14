import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../../components/HomePage";
import LoginAndRegisterForm from "../LoginAndRegisterForm/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginAndRegisterForm />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
