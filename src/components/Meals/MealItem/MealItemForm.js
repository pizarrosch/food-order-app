import s from './MealItemForm.module.css';
import Input from "./Input";
import {useRef, useState} from "react";


function MealItemForm(props) {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountAsNumber = +enteredAmount;
    console.log(enteredAmount)

    if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountAsNumber);
  }

  return (
    <form className={s.form} onSubmit={submitHandler}>
      <Input
        ref={amountRef}
        label="Number of items"
        input={{
          id: 'input ' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }
        }
      />
      <button onSubmit={submitHandler}>Add to cart</button>
      {!amountIsValid && <p>Please enter a valid amount from 1 to 5</p>}
    </form>
  )
}

export default MealItemForm;