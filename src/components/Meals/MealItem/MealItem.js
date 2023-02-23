import s from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import {Fragment} from "react";


function MealItem(props) {

  const price = `$${props.price.toFixed(2)}`;

  return (
      <li className={s.meal}>
        <div className={s.listItemContainer}>
          <h3>{props.name}</h3>
          <span className={s.description}>{props.description}</span>
          <span className={s.price}>{price}</span>
        </div>
        <div>
          <MealItemForm />
        </div>
      </li>
  )
}

export default MealItem;