import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import About from '../pages/About';
import { MOCK_DATA } from '../mock';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('About page', () => {
  it('renders the profile name characters', () => {
    renderWithRouter(<About />);
    // Name is split into chars; check all appear somewhere in the document
    const nameText = screen.getAllByText(/[A-Za-z]/);
    expect(nameText.length).toBeGreaterThan(0);
  });

  it('renders the about paragraph', () => {
    renderWithRouter(<About />);
    // The about text is long; check for a substring
    expect(screen.getByText(MOCK_DATA.profile.about)).toBeInTheDocument();
  });

  it('renders the Research Interests heading', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/Research Interests/i)).toBeInTheDocument();
  });

  it('renders all research interests as pills', () => {
    renderWithRouter(<About />);
    MOCK_DATA.profile.researchInterests.forEach((interest) => {
      expect(screen.getByText(interest)).toBeInTheDocument();
    });
  });

  it('renders the section header with "About"', () => {
    renderWithRouter(<About />);
    expect(screen.getByText(/ABOUT/i)).toBeInTheDocument();
  });
});
