// Application router: maps primary navigation items to real pages.
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import ScrollToTop from "./components/ScrollToTop";
import ApplyPage from "./pages/ApplyPage";
import ContentPage from "./pages/ContentPage";
import HomePage from "./pages/HomePage";
import ProgrammesPage from "./pages/ProgrammesPage";
import ProgrammeDetailPage from "./pages/ProgrammeDetailPage";
import NewsPage from "./pages/NewsPage";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<ContentPage type="about" />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/programmes/:slug" element={<ProgrammeDetailPage />} />
          <Route
            path="/opportunities"
            element={<ContentPage type="opportunities" />}
          />
          <Route path="/impact" element={<ContentPage type="impact" />} />
          <Route path="/contact" element={<ContentPage type="contact" />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<ArticlePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
