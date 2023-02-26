import s from './Modal.module.css';
import {Fragment} from "react";
import {createPortal} from "react-dom";

function Backdrop(props) {
  return <div className={s.backdrop} onClick={props.handleCartClose}/>
}

function ModalOverlay(props) {
  return (
    <div className={s.modal2}>
      <div>{props.children}</div>
    </div>
  )
}

function ThanksModal(props) {
  return (
    <Fragment>
      {createPortal(<Backdrop handleCartClose={props.handleCardClose}/>, document.getElementById('orderMadeOverlay'))}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('orderMadeOverlay'))}
    </Fragment>
  )
}

export default ThanksModal;