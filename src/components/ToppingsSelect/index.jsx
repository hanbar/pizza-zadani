import React, { useState } from "react";
import Topping from "../Topping";
import { usePrefs } from "../../prefs-context";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [checkedToppings, setCheckedToppings] = useState(toppings);
  const { veganOnly } = usePrefs();

  const handleCheckedToppings = (newValue, i) => {
    setCheckedToppings((prevState) => {
      const checkedToppingsArr = [...prevState];
      checkedToppingsArr[i].selected = newValue;
      return checkedToppingsArr;
    });
  };

  let selectedToppings = checkedToppings.filter((topping) => topping.selected);

  if (veganOnly) {
    selectedToppings = selectedToppings.filter((topping) => topping.vegan);
  }

  let totalPrice = 0;
  selectedToppings.forEach((topping) => {
    totalPrice = Math.round((totalPrice + topping.price) * 100) / 100;
  });

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedToppings.length}, total price: {totalPrice}{" "}
        Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, i) => {
          const checked = veganOnly
            ? topping.selected && topping.vegan
            : topping.selected;
          return (
            <Topping
              topping={topping}
              key={topping.name}
              onChange={(newValue) => handleCheckedToppings(newValue, i)}
              checked={checked}
            />
          );
        })}
      </div>
    </>
  );
};

export default ToppingsSelect;
