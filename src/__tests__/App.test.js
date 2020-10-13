//import react
import React from 'react';
//import mount
import { mount } from 'enzyme';
//import app component
import App from '../components/App';

describe('<App />', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  const app = mount(<App />);

  test('rendering', () => {
    expect(app.length).toEqual(1);
  });

  test('app text', () => {
    expect(app.text()).toEqual('Im the app component');
  });
});
