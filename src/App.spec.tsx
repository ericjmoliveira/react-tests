import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('should render the text: Hello world!', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello world!')).toBeInTheDocument();

    screen.debug();
  });
});
