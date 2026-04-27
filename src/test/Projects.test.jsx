import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import Projects from '../pages/Projects';
import { MOCK_DATA } from '../mock';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Projects page', () => {
  it('renders the section header', () => {
    renderWithRouter(<Projects />);
    // The header span contains "PROJECTS" - use getAllByText and check one is the header span
    const matches = screen.getAllByText(/PROJECTS/i);
    expect(matches.length).toBeGreaterThan(0);
    const headerSpan = matches.find((el) => el.tagName === 'SPAN');
    expect(headerSpan).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    renderWithRouter(<Projects />);
    MOCK_DATA.projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders all project descriptions', () => {
    renderWithRouter(<Projects />);
    MOCK_DATA.projects.forEach((project) => {
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  it('renders project periods', () => {
    renderWithRouter(<Projects />);
    MOCK_DATA.projects.forEach((project) => {
      expect(screen.getByText(project.period)).toBeInTheDocument();
    });
  });

  it('renders tech pills for each project', () => {
    renderWithRouter(<Projects />);
    // Check a known tech tag from first project
    expect(screen.getAllByText('Python').length).toBeGreaterThan(0);
  });

  it('renders all project highlights', () => {
    renderWithRouter(<Projects />);
    MOCK_DATA.projects.forEach((project) => {
      project.highlights.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeInTheDocument();
      });
    });
  });

  it('renders GitHub links for each project', () => {
    renderWithRouter(<Projects />);
    const links = screen.getAllByRole('link');
    MOCK_DATA.projects.forEach((project) => {
      const found = links.some((link) => link.getAttribute('href') === project.github);
      expect(found).toBe(true);
    });
  });

  it('renders the intro copy', () => {
    renderWithRouter(<Projects />);
    expect(screen.getByText(/Selected work/i)).toBeInTheDocument();
  });
});
