import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../contexts/DarkModeProvider';
import HomePage from '../pages/HomePage';

function renderHome() {
  return render(
    <DarkModeProvider>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </DarkModeProvider>,
  );
}

describe('HomePage', () => {
  it('renders the hero heading', () => {
    renderHome();
    expect(
      screen.getByRole('heading', {
        name: /full-stack products/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders project cards from data', () => {
    renderHome();
    expect(screen.getByText('Automated HR Decision Support Tool')).toBeInTheDocument();
    expect(screen.getByText('Mirror')).toBeInTheDocument();
    expect(screen.getByText('Repacked')).toBeInTheDocument();
  });

  it('renders skills section with grouped categories', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('onions')).toBeInTheDocument();
  });
});
