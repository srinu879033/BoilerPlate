


import {React} from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from "./components/Counter";

afterEach(cleanup);

  it('initial state should be equal to 0', () => {
    const { getByTestId } = render(<Counter />); 
    expect(getByTestId('counter')).toHaveTextContent(0)
   });

 
   it('should be enabled', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('increment')).not.toHaveAttribute('disabled')
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Counter />); 
    expect(getByTestId('decrement')).toBeDisabled()
  });

  it('increments counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('increment'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<Counter />); 
    
    fireEvent.click(getByTestId('decrement'))

    expect(getByTestId('counter')).toHaveTextContent('0')
  });