import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { DarkModeProvider } from '../contexts/DarkModeProvider';
import Contact from '../components/Contact';

function renderContact() {
  return render(
    <DarkModeProvider>
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    </DarkModeProvider>,
  );
}

describe('Contact form', () => {

  it('shows validation errors for empty submission', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('shows invalid email error', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.type(screen.getByLabelText('Subject'), 'Hello');
    await user.type(screen.getByLabelText('Message'), 'Test message');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('uses mailto fallback when no Formspree endpoint is configured', async () => {
    const user = userEvent.setup();
    renderContact();

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Subject'), 'Hello');
    await user.type(screen.getByLabelText('Message'), 'Test message');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/email client should open/i)).toBeInTheDocument();
    });
  });

  it('clears validation errors after a successful Formspree submission', async () => {
    vi.stubEnv('VITE_FORMSPREE_ENDPOINT', 'https://formspree.io/f/test');
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
      }),
    );

    const user = userEvent.setup();
    renderContact();

    await user.click(screen.getByRole('button', { name: /send message/i }));
    expect(await screen.findByText('Name is required')).toBeInTheDocument();

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Subject'), 'Hello');
    await user.type(screen.getByLabelText('Message'), 'Test message');
    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/message sent/i)).toBeInTheDocument();
    });

    expect(screen.queryByText('Name is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Subject is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Message is required')).not.toBeInTheDocument();
  });
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
