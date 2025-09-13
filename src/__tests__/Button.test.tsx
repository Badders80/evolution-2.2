import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '@/components/Button';

describe('Button component', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});