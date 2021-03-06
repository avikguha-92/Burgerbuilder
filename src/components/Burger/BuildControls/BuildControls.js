import React from "react";
import Classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" }
];

const buildControls = props => (
  <div className={Classes.BuildControls}>
    <p>
      Total Price : <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disbaled={props.disbaledInfo[ctrl.type]}
      />
    ))}
    <button
      disabled={!props.purchasabale}
      className={Classes.OrderButton}
      onClick={props.purchasing}
    >
      ORDER NOW
    </button>
  </div>
);
export default buildControls;
