import s from './CartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/CartContext";

function CartButton(props) {

  const [animatedButton, setAnimatedButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfAddedItems = cartCtx.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);

  const btnClasses = `${s.button} ${animatedButton ? s.bump : ''}`

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setAnimatedButton(true);

    const timer = setTimeout(() => {setAnimatedButton(false)}, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [cartCtx.items])

  return (
    <>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={s.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={s.badge}>{numberOfAddedItems}</span>
      </button>
    </>
  )
}

export default CartButton;

