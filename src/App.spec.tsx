import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
// import {} from '@testing-library/user-event'

import App from './App';

describe('App component', () => {
  it('should render the text: Hello world!', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello world!')).toBeInTheDocument();

    screen.debug();
  });

  it('should render the list of languages', () => {
    const { getByText } = render(<App />);

    expect(getByText('HTML')).toBeInTheDocument();
    expect(getByText('CSS')).toBeInTheDocument();
    expect(getByText('JavaScript')).toBeInTheDocument();

    screen.debug();
  });
});
