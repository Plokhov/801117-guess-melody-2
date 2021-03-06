import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`When the user answers, the callback function gets the data in the correct format`, () => {
  const onUserAnswer = jest.fn();
  const genreQuestionScreen = shallow(<GenreQuestionScreen
    screenIndex={0}
    question={{
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          id: `1`,
          src: `a`,
          genre: `pop`,
        },
        {
          id: `2`,
          src: `a`,
          genre: `pop`,
        },
        {
          id: `3`,
          src: `a`,
          genre: `pop`,
        },
        {
          id: `4`,
          src: `a`,
          genre: `pop`,
        },
      ],
    }}
    onAnswer={onUserAnswer}
  />);

  genreQuestionScreen.find(`form`).simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onUserAnswer).toHaveBeenCalledTimes(1);
});


