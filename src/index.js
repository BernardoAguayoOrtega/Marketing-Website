//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import app component
import App from './components/App';

//root const
const root = document.getElementById('app');

//render the app
render(<App />, root);
