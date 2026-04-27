import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import Contact from '../pages/Contact';
import { MOCK_DATA } from '../mock';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Contact page', () => {
  it('renders the section header', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/CONTACT/i)).toBeInTheDocument();
  });

  it('renders the "Let\'s connect." heading', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(/Let's connect/i)).toBeInTheDocument();
  });

  it('renders the email address', () => {
    renderWithRouter(<Contact />);
    const { email } = MOCK_DATA.profile.contact;
    expect(screen.getAllByText(email).length).toBeGreaterThan(0);
  });

  it('renders the location', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByText(MOCK_DATA.profile.contact.location)).toBeInTheDocument();
  });

  it('renders name, email and message inputs', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('john@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Your message here...')).toBeInTheDocument();
  });

  it('updates form fields on change', () => {
    renderWithRouter(<Contact />);
    const nameInput = screen.getByPlaceholderText('John Doe');
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    expect(nameInput.value).toBe('Alice');
  });

  it('renders the Send Message button', () => {
    renderWithRouter(<Contact />);
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
  });

  describe('form submission', () => {
    beforeEach(() => {
      vi.stubGlobal('location', { href: '' });
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.unstubAllGlobals();
      vi.useRealTimers();
    });

    it('builds a mailto href and shows "Opening email client..." on submit', () => {
      renderWithRouter(<Contact />);

      fireEvent.change(screen.getByPlaceholderText('John Doe'), { target: { value: 'Bob' } });
      fireEvent.change(screen.getByPlaceholderText('john@example.com'), {
        target: { value: 'bob@test.com' },
      });
      fireEvent.change(screen.getByPlaceholderText('Your message here...'), {
        target: { value: 'Hello!' },
      });

      const form = screen.getByRole('button', { name: /Send Message/i }).closest('form');
      fireEvent.submit(form);

      expect(window.location.href).toMatch(/^mailto:/);
      expect(window.location.href).toContain('Bob');
      expect(screen.getByText(/Opening email client/i)).toBeInTheDocument();
    });

    it('resets the form fields after submission', async () => {
      renderWithRouter(<Contact />);

      const nameInput = screen.getByPlaceholderText('John Doe');
      fireEvent.change(nameInput, { target: { value: 'Carol' } });

      const form = screen.getByRole('button', { name: /Send Message/i }).closest('form');
      await act(async () => {
        fireEvent.submit(form);
      });

      expect(nameInput.value).toBe('');
    });

    it('resets status back to idle after 3 seconds', async () => {
      renderWithRouter(<Contact />);

      const form = screen.getByRole('button', { name: /Send Message/i }).closest('form');
      await act(async () => {
        fireEvent.submit(form);
      });

      expect(screen.getByText(/Opening email client/i)).toBeInTheDocument();

      await act(async () => {
        vi.advanceTimersByTime(3000);
      });
      expect(screen.getByRole('button', { name: /Send Message/i })).toBeInTheDocument();
    });
  });
});
