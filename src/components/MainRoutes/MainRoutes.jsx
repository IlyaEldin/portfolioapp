import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";
import Catalog from "../Catalog/Catalog";
import ApiPage from "../ApiPage/ApiPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function MainRoutes() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/api' element={<ApiPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
