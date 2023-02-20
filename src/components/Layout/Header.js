import {Fragment} from "react";
import headerMealsImage from '../../images/meals.jpg';
import s from './Header.module.css';
import CartButton from "./CartButton";

function Header() {
  return (
    <Fragment>
      <header className={s.header}>
        <h1>React meals</h1>
        <CartButton />
      </header>
      <div className={s.mainImage}>
        <img src={headerMealsImage} alt='meals-header-image'/>
      </div>
    </Fragment>
  )
}

export default Header;
