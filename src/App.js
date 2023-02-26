import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartProvider from "./store/CartProvider";


function App() {

  const [isVisible, setIsVisible] = useState(false);

  function cartShowHandler() {
    setIsVisible(true);
  }

  function cartCloseHandler() {
    setIsVisible(false);
  }

  return (
    <CartProvider>
      <h2>Let's get started!</h2>
      <Header onClick={cartShowHandler} />
      <main>
        <Meals />
        {isVisible && <Cart onCardClose={cartCloseHandler} />}
      </main>
    </CartProvider>
  );
}

export default App;
