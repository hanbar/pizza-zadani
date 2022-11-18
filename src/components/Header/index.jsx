import React from "react";
import { usePrefs } from "../../prefs-context";

const Header = () => {
  const { veganOnly, setVegan } = usePrefs();

  return (
    <>
      <header>
        <div className="pizza" />
        <h1>Build your own pizza</h1>
      </header>
      <div className="topping">
        <button className={"check"} onClick={setVegan}>
          {veganOnly ? "✓" : ""}
        </button>
        <span className="topping__content">Only vegan</span>
      </div>
    </>
  );
};

export default Header;
