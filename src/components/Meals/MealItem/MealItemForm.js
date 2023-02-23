import s from './MealItemForm.module.css';
import Input from "./Input";


function MealItemForm() {
  return (
    <form className={s.form}>
      <Input label="Number of items" id={{
        id: 'input',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }
      }/>
      <button>Add to cart</button>
    </form>
  )
}

export default MealItemForm;