import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Header from "./components/header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}