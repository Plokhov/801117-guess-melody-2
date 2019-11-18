import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistQuestionScreen} from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`When the user answers, the callback function gets the data in the correct format`, () => {
  const onUserAnswer = jest.fn();
  const genreQuestionScreen = shallow(<ArtistQuestionScreen
    screenIndex={0}
    question={{
      type: `a`,
      song: {
        artist: `a`,
        src: `a`,
      },
      answers: [
        {
          picture: `a`,
          artist: `a`,
        },
        {
          picture: `b`,
          artist: `b`,
        },
        {
          picture: `c`,
          artist: `c`,
        },
      ],
    }}
    onAnswer={onUserAnswer}
  />);

  genreQuestionScreen.find(`form`).simulate(`change`);
  expect(onUserAnswer).toHaveBeenCalledTimes(1);
});
