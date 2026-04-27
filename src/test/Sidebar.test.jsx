import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import Sidebar from '../components/Sidebar';
import { MOCK_DATA } from '../mock';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Sidebar component', () => {
  it('renders the profile name', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText(MOCK_DATA.profile.name)).toBeInTheDocument();
  });

  it('renders the role', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText(MOCK_DATA.profile.role)).toBeInTheDocument();
  });

  it('renders the tagline', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText(MOCK_DATA.profile.tagline)).toBeInTheDocument();
  });

  it('renders the primary email address', () => {
    renderWithRouter(<Sidebar />);
    const { email } = MOCK_DATA.profile.contact;
    expect(screen.getByText(email)).toBeInTheDocument();
  });

  it('renders the college email address', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText(MOCK_DATA.profile.contact.collegeEmail)).toBeInTheDocument();
  });

  it('renders the location', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText(MOCK_DATA.profile.contact.location)).toBeInTheDocument();
  });

  it('renders GitHub and LinkedIn links with correct hrefs', () => {
    renderWithRouter(<Sidebar />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map((l) => l.getAttribute('href'));
    expect(hrefs).toContain(MOCK_DATA.profile.contact.github);
    expect(hrefs).toContain(MOCK_DATA.profile.contact.linkedin);
  });

  it('renders the initials avatar placeholder', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText('AR')).toBeInTheDocument();
  });
});
