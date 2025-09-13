/// <reference types="jest" />

import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from '../app/page';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => <img src={src} alt={alt} {...props} />,
}));

describe('HomePage', () => {
  it('renders the header with logo and navigation', () => {
    render(<HomePage />);

    // Check logo
    const logo = screen.getByAltText('Evolution Stables Logo');
    expect(logo).toBeInTheDocument();

    // Check nav links
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check CTA button
    expect(screen.getByText('Get Template')).toBeInTheDocument();
  });

  it('renders the hero section with brand name and tagline', () => {
    render(<HomePage />);

    expect(screen.getByText('EVOLUTION STABLES')).toBeInTheDocument();
    expect(screen.getByText('Own the Experience')).toBeInTheDocument();
  });

  it('renders section placeholders', () => {
    render(<HomePage />);

    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Process')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container.firstChild).toMatchSnapshot();
  });
});