import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../contexts/DarkModeProvider';
import Navigation from '../components/Navigation';

function renderNav(initialPath = '/') {
  return render(
    <DarkModeProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Navigation />
      </MemoryRouter>
    </DarkModeProvider>,
  );
}

describe('Navigation', () => {
  it('opens and closes mobile menu', async () => {
    const user = userEvent.setup();
    renderNav();

    const toggle = screen.getByRole('button', { name: /open navigation menu/i });
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close navigation menu/i }));
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
  });

  it('renders all nav items', () => {
    renderNav();
    expect(screen.getByRole('menuitem', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Skills' })).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: 'Contact' })).toBeInTheDocument();
  });
});
