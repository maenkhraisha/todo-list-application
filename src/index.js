import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter  } from "react-router-dom"
//component file

import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <React.Fragment>
        <TodoContainer />
      </React.Fragment>
    </BrowserRouter >
  </React.StrictMode>
)