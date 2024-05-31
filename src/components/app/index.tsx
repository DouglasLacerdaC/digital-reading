import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";
import { Router } from "@/router";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  )
}
