import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
  } from '@testing-library/dom';
import '@testing-library/jest-dom';
import BookNow  from "../components/BookNow/BookNow.js"
// import bookNow from '@/data/bookNow.js';


describe('App', () => {
  test('renders App component', () => {
    render(<BookNow />);

    screen.debug();
  });
});