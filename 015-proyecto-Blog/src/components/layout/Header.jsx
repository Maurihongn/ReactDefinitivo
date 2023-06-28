import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink to={"/"}>
          <h2>Mi Blog React</h2>
        </NavLink>
      </header>
    </>
  );
};
