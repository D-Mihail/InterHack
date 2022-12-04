import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useParams } from "react-router";
import { Homepage } from "./components/Homepage";
import { Results } from "./components/Results";
import { InputDataType } from "./types.ts/DataTypes";
import { SideBar } from "./components/SideBar";
import { Telescope } from "./components/Telescope";

function App() {
  const [inputData, setInputData] = useState<InputDataType[]>([]);

  return (
    <>
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="row justify-content-start">
                <SideBar />
                <Routes>
                  <Route path="/" element={<Homepage />}></Route>
                  <Route path="/telescope" element={<Telescope />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
