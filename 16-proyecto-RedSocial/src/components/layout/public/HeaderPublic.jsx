import { NavPublic } from "./NavPublic";

export const HeaderPublic = () => {
  return (
    <>
      <header className="layout__navbar">
        <div className="navbar__header">
          <a href="#" className="navbar__title">
            REACTSOCIAL
          </a>
        </div>

        <NavPublic />
      </header>
    </>
  );
};
