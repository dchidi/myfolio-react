import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.module.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Folio from "./pages/folio/Folio";
import Settings from "./pages/settings/Settings";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/index" element={<Dashboard />} />
      {/* folio page */}
      <Route path="/folio" element={<Folio />} />
      {/* Settings page */}
      <Route path="/settings" element={<Settings />} />
      {/* Page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
