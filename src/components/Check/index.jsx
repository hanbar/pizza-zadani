import React from "react";
import "./style.css";
import { usePrefs } from "../../prefs-context";

const Check = ({ checked, onChange, vegan }) => {
  const { veganOnly } = usePrefs();

  const handleClick = () => {
    if (veganOnly && !vegan) return;
    onChange(!checked);
  };

  return (
    <button
      className={veganOnly && !vegan ? "check check--disabled" : "check"}
      onClick={handleClick}
    >
      {checked ? "✓" : ""}
    </button>
  );
};

export default Check;
