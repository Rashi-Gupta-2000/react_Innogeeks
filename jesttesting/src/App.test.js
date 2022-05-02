import { findAllByAltText, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is react/i);
  expect(linkElement).toBeInTheDocument();
});

// 1. render -> render component in testing file
// 2. screen
// 3. test -> global function
// 4. expect -> global function

// get 
// getBy - returns matching node, thorow error if not matched or multiple matched
// getAllBy - return an array of matching nodes if atleast 1 match is found, error if no match is found

// query 
// queryBy - one match found -> get matching node
// not found -> null
// multiple matched found -> throw error

// queryAllBy -> return array of nodes if at least one matched
// empty array - no match found

// find
// findBy: return promise -> returns node
// if multiple or no match is found -> throw error

// findAllBy: return a promise -> returns an array of matching nodes
// no match found -> throw error
