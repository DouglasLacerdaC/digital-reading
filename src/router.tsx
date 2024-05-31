import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Material } from "./pages/material";
import { useEffect } from "react";
import { Materials } from "./pages/materials";

export function Router() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="materials" element={<Materials />} />
      <Route path="material/:id" element={<Material />} />
    </Routes>
  )
}
