import React from "react";

const ModalError = () => {
  return (
    <section className="modal">
      <h2 className="modal__title">
        Произошла ошибка!
      </h2>
      <p className="modal__text">
        Статус: 404. Пожалуйста, перезагрузите страницу.
      </p>
    </section>
  );
};

export default ModalError;
