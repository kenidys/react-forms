import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import css from "./ErrorModal.module.css";
const Backdrop = (props) => {
  return <div onClick={props.closeError} className={css.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={css.modal}>
      <header className={css.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={css.content}>
        <p>{props.message}</p>
      </div>
      <footer className={css.actions}>
        <Button onClick={props.closeError}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeError={props.closeError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} closeError={props.closeError} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
