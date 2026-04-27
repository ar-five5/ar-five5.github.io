import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '../test/mocks.js';
import { BGPattern } from '../components/ui/bg-pattern';

describe('BGPattern component', () => {
  it('renders a div', () => {
    const { container } = render(<BGPattern />);
    expect(container.firstChild.tagName).toBe('DIV');
  });

  it('applies custom className', () => {
    const { container } = render(<BGPattern className="my-class" />);
    expect(container.firstChild).toHaveClass('my-class');
  });

  it('sets backgroundImage style for grid variant', () => {
    const { container } = render(<BGPattern variant="grid" fill="#ff0000" size={24} />);
    const style = container.firstChild.getAttribute('style');
    // Grid uses two linear-gradients
    expect(style).toContain('linear-gradient');
  });

  it('sets backgroundImage style for dots variant', () => {
    const { container } = render(<BGPattern variant="dots" fill="#00ff00" size={16} />);
    const style = container.firstChild.getAttribute('style');
    expect(style).toContain('radial-gradient');
  });

  it('sets backgroundImage style for diagonal-stripes variant', () => {
    const { container } = render(<BGPattern variant="diagonal-stripes" fill="#0000ff" size={20} />);
    const style = container.firstChild.getAttribute('style');
    expect(style).toContain('repeating-linear-gradient');
  });

  it('returns undefined background for unknown variant', () => {
    const { container } = render(<BGPattern variant="unknown" fill="#fff" size={10} />);
    // Should render without crashing
    expect(container.firstChild).toBeTruthy();
  });

  it('applies backgroundSize based on size prop', () => {
    const { container } = render(<BGPattern variant="grid" size={32} fill="#333" />);
    const style = container.firstChild.getAttribute('style');
    expect(style).toContain('32px 32px');
  });
});
