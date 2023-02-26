import CartContext from "./CartContext";
import {useReducer} from "react";


const defaultCartState = {
  items: [],
  totalAmount: 0,
  text: ''
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART_ITEM') {
    const existingCartItemId = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemId];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }

      updatedItems = [...state.items];
      updatedItems[existingCartItemId] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const actualTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: actualTotalAmount
    }
  }

  if (action.type === 'REMOVE_CART_ITEM') {
    const existingCartItemId = state.items.findIndex(item => item.id === action.id);
    const existingCartItem = state.items[existingCartItemId];
    const actualTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1
      }

      updatedItems = [...state.items];
      updatedItems[existingCartItemId] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: actualTotalAmount
    }
  }

  if (action.type === 'CLOSE_ORDER') {
    return defaultCartState;
  }

  return defaultCartState;
};

function CartProvider(props) {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  function addItem(item) {
    dispatchCartAction({type: 'ADD_CART_ITEM', item: item})
  }

  function removeItem(id) {
    dispatchCartAction({type: 'REMOVE_CART_ITEM', id: id})
  }

  function closeOrder() {
    dispatchCartAction({
      type: 'CLOSE_ORDER',
    })

  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
    closeOrder: closeOrder
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider;