//import react
import React from 'react';
//import mount
import { mount } from 'enzyme';
//import app component
import App from '../components/App';

describe('<App /> rendering', () => {
  test('test', () => {
    // eslint-disable-next-line react/jsx-filename-extension
    const app = mount(<App />);

    expect(app.length).toEqual(1);
  });
});
