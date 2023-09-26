import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="grid gap-2 md:flex justify-between py-7 mx-14 md:mx-5">
        <Logo></Logo>
        <ul className="flex gap-5 text-xl font-semibold">

          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A;] underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
