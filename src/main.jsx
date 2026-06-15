import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Travaux from "./pages/Travaux.jsx";
import Services from "./pages/Services.jsx";
import Equipe from "./pages/Equipe.jsx";
import FAQ from "./pages/FAQ.jsx";
import APropos from "./pages/APropos.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="travaux" element={<Travaux />} />
          <Route path="services" element={<Services />} />
          <Route path="equipe" element={<Equipe />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="a-propos" element={<APropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
