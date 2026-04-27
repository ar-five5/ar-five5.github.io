import { describe, it, expect } from 'vitest';
import { cn } from '../lib/utils';

describe('cn (classname utility)', () => {
  it('returns a single class unchanged', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('joins multiple classes', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('ignores falsy values', () => {
    expect(cn('foo', false, null, undefined, '')).toBe('foo');
  });

  it('merges conflicting Tailwind classes (last wins)', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('handles conditional object syntax from clsx', () => {
    expect(cn({ 'text-white': true, 'text-black': false })).toBe('text-white');
  });

  it('handles array syntax', () => {
    expect(cn(['a', 'b'], 'c')).toBe('a b c');
  });

  it('returns empty string when called with no arguments', () => {
    expect(cn()).toBe('');
  });
});
