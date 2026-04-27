import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '../test/mocks.js';
import Pill from '../components/ui/pill';

describe('Pill component', () => {
  it('renders children text', () => {
    render(<Pill>Python</Pill>);
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    const { container } = render(<Pill>React</Pill>);
    expect(container.firstChild.tagName).toBe('SPAN');
  });

  it('applies additional className', () => {
    const { container } = render(<Pill className="extra-class">Test</Pill>);
    expect(container.firstChild).toHaveClass('extra-class');
  });

  it('always includes base styles', () => {
    const { container } = render(<Pill>Base</Pill>);
    expect(container.firstChild.className).toContain('px-3');
    expect(container.firstChild.className).toContain('font-mono');
  });
});
