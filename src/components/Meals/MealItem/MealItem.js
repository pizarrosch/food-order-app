import s from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import {Fragment, useContext} from "react";
import CartContext from "../../../store/CartContext";


function MealItem(props) {

  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  function handleAddToCart(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    })
  }

  return (
    <li className={s.meal}>
      <div className={s.listItemContainer}>
        <h3>{props.name}</h3>
        <span className={s.description}>{props.description}</span>
        <span className={s.price}>{price}</span>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={handleAddToCart}/>
      </div>
    </li>
  )
}

export default MealItem;