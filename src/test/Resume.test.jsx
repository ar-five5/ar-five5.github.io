import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import '../test/mocks.js';
import Resume from '../pages/Resume';
import { MOCK_DATA } from '../mock';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Resume page', () => {
  it('renders the section header', () => {
    renderWithRouter(<Resume />);
    expect(screen.getByText(/RESUME/i)).toBeInTheDocument();
  });

  it('renders the Experience heading', () => {
    renderWithRouter(<Resume />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  it('renders the Education heading', () => {
    renderWithRouter(<Resume />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
  });

  it('renders the Capabilities heading', () => {
    renderWithRouter(<Resume />);
    expect(screen.getByText(/Capabilities/i)).toBeInTheDocument();
  });

  it('renders all education entries', () => {
    renderWithRouter(<Resume />);
    MOCK_DATA.resume.education.forEach((edu) => {
      expect(screen.getByText(edu.degree)).toBeInTheDocument();
      expect(screen.getByText(edu.institution)).toBeInTheDocument();
    });
  });

  it('renders all experience entries', () => {
    renderWithRouter(<Resume />);
    MOCK_DATA.resume.experience.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
    });
  });

  it('renders all skill categories', () => {
    renderWithRouter(<Resume />);
    Object.keys(MOCK_DATA.resume.skills).forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders skill pills', () => {
    renderWithRouter(<Resume />);
    // Check a known skill from every category
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Git & GitHub')).toBeInTheDocument();
    expect(screen.getByText('Pandas')).toBeInTheDocument();
  });
});
