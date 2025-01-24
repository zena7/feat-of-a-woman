import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import Welcome from './pages/welcome/Welcome.jsx';
import Warning from './pages/warning/Warning.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/feat-of-a-woman">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/game" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
