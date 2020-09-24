import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders input both labels correctly', () => {
  const { getByText } = render(<App />);
  const romanInputConvertionElement = getByText(/Roman Number/i);
  const integerInputConvertionElement = getByText(/Integer Number/i);

  expect(romanInputConvertionElement).toBeInTheDocument();
  expect(integerInputConvertionElement).toBeInTheDocument();
});