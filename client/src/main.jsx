import React from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context';
import App from "./App";
import './index.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";
const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <ThirdwebProvider
      activeChain={activeChain}
    >
      <Router>
        <StateContextProvider>
          <App/>
        </StateContextProvider>
      </Router>
    </ThirdwebProvider>
);
