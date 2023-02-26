import {useContext, useState} from "react";
import s from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import ThanksModal from "../UI/thanksModal";

function Cart(props) {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const [orderMade, setOrderMade] = useState(false);

  function handleCartItemAdd(item) {
    cartCtx.addItem({
      ...item,
      amount: 1
    })
  }

  function handleCartItemRemove(id) {
    cartCtx.removeItem(id);
  }

  const cartItems = (
    <ul className={s['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={handleCartItemAdd.bind(null, item)}
          onRemove={handleCartItemRemove.bind(null, item.id)}
        />
      ))
      }
    </ul>
  )

  return (
    orderMade === false ?
      <Modal handleCardClose={props.onCardClose}>
        {cartItems}
        <div className={s.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={s.actions}>
          <button className={s.closeButton} onClick={props.onCardClose}>Close</button>
          {hasItems && <button className={s.button} onClick={() => {
            cartCtx.closeOrder();
            setOrderMade(true);
            setTimeout(() => props.onCardClose(), 3000);
          }}>Order</button>}
        </div>
      </Modal> :
      <ThanksModal>
        <span>Thank you</span>
        <p>Your order is being processed...</p>
      </ThanksModal>
  )
}

export default Cart;