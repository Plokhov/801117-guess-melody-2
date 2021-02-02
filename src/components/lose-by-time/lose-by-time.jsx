import React from "react";
import PropTypes from "prop-types";

export const LoseByTime = (props) => {
  const {onStartButtonClick} = props;

  return (<section className="result">
    <div className="result__logo">
      <img
        src="img/melody-logo.png"
        alt="Угадай мелодию"
        width="186"
        height="83"
      />
    </div>
    <h2 className="result__title">
      Увы и ах!
    </h2>
    <p className="result__total result__total--fail">
      Время вышло! Вы не успели отгадать все мелодии
    </p>
    <button
      className="replay"
      type="button"
      onClick={onStartButtonClick}
    >
      Попробовать ещё раз
    </button>
  </section>);
};

LoseByTime.propTypes = {
  onStartButtonClick: PropTypes.func.isRequired,
};
