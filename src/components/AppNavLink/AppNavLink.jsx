import { NavLink } from "react-router-dom";
import "./AppNavLink.css";

export default function AppNavLink({ children, ...props }) {
  return (
    <NavLink
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
      {...props}
    >
      {children}
    </NavLink>
  );
}
