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

export default function MainRoutes() {
  return (
    <Router>
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
