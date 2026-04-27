import { describe, it, expect } from 'vitest';
import { MOCK_DATA } from '../mock';

describe('MOCK_DATA structure', () => {
  describe('profile', () => {
    it('has a non-empty name', () => {
      expect(typeof MOCK_DATA.profile.name).toBe('string');
      expect(MOCK_DATA.profile.name.length).toBeGreaterThan(0);
    });

    it('has a role and tagline', () => {
      expect(MOCK_DATA.profile.role).toBeTruthy();
      expect(MOCK_DATA.profile.tagline).toBeTruthy();
    });

    it('has an about string', () => {
      expect(typeof MOCK_DATA.profile.about).toBe('string');
      expect(MOCK_DATA.profile.about.length).toBeGreaterThan(0);
    });

    it('has a non-empty researchInterests array', () => {
      expect(Array.isArray(MOCK_DATA.profile.researchInterests)).toBe(true);
      expect(MOCK_DATA.profile.researchInterests.length).toBeGreaterThan(0);
    });

    it('has valid contact fields', () => {
      const { contact } = MOCK_DATA.profile;
      expect(contact.email).toMatch(/@/);
      expect(contact.location).toBeTruthy();
      expect(contact.github).toMatch(/^https:\/\//);
      expect(contact.linkedin).toMatch(/^https:\/\//);
    });
  });

  describe('resume', () => {
    it('has education entries with required fields', () => {
      expect(Array.isArray(MOCK_DATA.resume.education)).toBe(true);
      expect(MOCK_DATA.resume.education.length).toBeGreaterThan(0);
      MOCK_DATA.resume.education.forEach((edu) => {
        expect(edu).toHaveProperty('id');
        expect(edu).toHaveProperty('degree');
        expect(edu).toHaveProperty('institution');
        expect(edu).toHaveProperty('period');
        expect(edu).toHaveProperty('description');
      });
    });

    it('has experience entries with required fields', () => {
      expect(Array.isArray(MOCK_DATA.resume.experience)).toBe(true);
      expect(MOCK_DATA.resume.experience.length).toBeGreaterThan(0);
      MOCK_DATA.resume.experience.forEach((exp) => {
        expect(exp).toHaveProperty('id');
        expect(exp).toHaveProperty('role');
        expect(exp).toHaveProperty('company');
        expect(exp).toHaveProperty('period');
        expect(exp).toHaveProperty('description');
      });
    });

    it('has skills as an object with array values', () => {
      const { skills } = MOCK_DATA.resume;
      expect(typeof skills).toBe('object');
      Object.values(skills).forEach((list) => {
        expect(Array.isArray(list)).toBe(true);
        expect(list.length).toBeGreaterThan(0);
      });
    });

    it('has certifications with required fields', () => {
      expect(Array.isArray(MOCK_DATA.resume.certifications)).toBe(true);
      MOCK_DATA.resume.certifications.forEach((cert) => {
        expect(cert).toHaveProperty('id');
        expect(cert).toHaveProperty('name');
        expect(cert).toHaveProperty('issuer');
        expect(cert).toHaveProperty('year');
      });
    });
  });

  describe('projects', () => {
    it('has a non-empty projects array', () => {
      expect(Array.isArray(MOCK_DATA.projects)).toBe(true);
      expect(MOCK_DATA.projects.length).toBeGreaterThan(0);
    });

    it('each project has required fields', () => {
      MOCK_DATA.projects.forEach((project) => {
        expect(project).toHaveProperty('id');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('period');
        expect(project).toHaveProperty('description');
        expect(Array.isArray(project.tech)).toBe(true);
        expect(Array.isArray(project.highlights)).toBe(true);
        expect(project.github).toMatch(/^https:\/\//);
      });
    });

    it('all project ids are unique', () => {
      const ids = MOCK_DATA.projects.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    });
  });
});
