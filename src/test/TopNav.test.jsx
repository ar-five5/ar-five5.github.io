import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import TopNav from '../components/TopNav';

const renderWithRouter = (ui, { initialEntries = ['/'] } = {}) =>
  render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);

describe('TopNav component', () => {
  it('renders all four nav items', () => {
    renderWithRouter(<TopNav />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders nav links with correct hrefs', () => {
    renderWithRouter(<TopNav />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain('/');
    expect(hrefs).toContain('/resume');
    expect(hrefs).toContain('/projects');
    expect(hrefs).toContain('/contact');
  });

  it('marks the About link as active on the root path', () => {
    renderWithRouter(<TopNav />, { initialEntries: ['/'] });
    const aboutLink = screen.getByText('About').closest('a');
    // Active link gets text-white class
    expect(aboutLink.className).toContain('text-white');
  });

  it('marks the Resume link as active on /resume', () => {
    renderWithRouter(<TopNav />, { initialEntries: ['/resume'] });
    const resumeLink = screen.getByText('Resume').closest('a');
    expect(resumeLink.className).toContain('text-white');
  });

  it('non-active links do not have the standalone text-white active class', () => {
    renderWithRouter(<TopNav />, { initialEntries: ['/'] });
    const resumeLink = screen.getByText('Resume').closest('a');
    // Inactive links use text-[#666]; active ones get standalone text-white (not hover:text-white)
    expect(resumeLink.className).toContain('text-[#666]');
    expect(resumeLink.className).not.toMatch(/(^| )text-white( |$)/);
  });

  it('renders inside a nav element', () => {
    const { container } = renderWithRouter(<TopNav />);
    expect(container.querySelector('nav')).toBeInTheDocument();
  });
});
