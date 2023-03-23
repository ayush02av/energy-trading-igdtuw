import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Dashboard from "./pages/dashboard";
import Marketplace from "./pages/marketplace"
import Community from "./pages/community"
import Header from "./components/header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Marketplace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/store" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  )
}