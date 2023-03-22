import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Community from "./pages/community"
import Marketplace from "./pages/marketplace";
import Header from "./components/header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/store" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  )
}