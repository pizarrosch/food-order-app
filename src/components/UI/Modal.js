import s from './Modal.module.css';
import {Fragment} from "react";
import {createPortal} from "react-dom";

function Backdrop(props) {
  return <div className={s.backdrop} onClick={props.handleCartClose}/>
}

function ModalOverlay(props) {
  return (
    <div className={s.modal}>
      <div>{props.children}</div>
    </div>
  )
}

function Modal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop handleCartClose={props.handleCardClose}/>, document.getElementById('overlay'))}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlay'))}
    </Fragment>
  )
}

export default Modal;