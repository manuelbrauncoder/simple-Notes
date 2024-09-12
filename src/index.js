import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./components/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles/main.scss";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);