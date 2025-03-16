import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./pages/App";
import { BrowserRouter } from "react-router-dom";





const rootElement = document.getElementById('root')as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
        <React.StrictMode>
                <BrowserRouter basename="/react-app">
                <App/>
                </BrowserRouter>
        </React.StrictMode>
    );
  

