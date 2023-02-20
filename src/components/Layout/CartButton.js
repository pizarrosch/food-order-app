import s from './CartButton.module.css';
import CartIcon from "../Cart/CartIcon";

function CartButton() {
  return (
    <>
      <button className={s.button}>
        <span className={s.icon}><CartIcon /></span>
        <span>Add to cart</span>
        <span className={s.badge}>5</span>
      </button>
    </>
  )
}

export default CartButton;