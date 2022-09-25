import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.module.css";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

// This component manages all routes
function App() {
  // All routes apart from PageNotFound goes through AppLayout component with a props called page to indicate
  // which subcomponent to display.
  return (
    <Routes>
      {/* home page */}
      <Route path="/" element={<AppLayout page="index" />} exact />
      <Route path="/home" element={<AppLayout page="index" />} />
      <Route path="/index" element={<AppLayout page="index" />} />
      {/* folio page */}
      <Route path="/folio" element={<AppLayout page="folio" />} />
      {/* Settings page */}
      <Route path="/settings" element={<AppLayout page="settings" />} />
      {/* Page not found */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
