import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from '../contexts/DarkModeProvider';
import CaseStudyPage from '../pages/CaseStudyPage';
import NotFound from '../components/NotFound';

function renderCaseStudy(slug: string) {
  return render(
    <DarkModeProvider>
      <MemoryRouter initialEntries={[`/projects/${slug}`]}>
        <Routes>
          <Route path="/projects/:slug" element={<CaseStudyPage />} />
        </Routes>
      </MemoryRouter>
    </DarkModeProvider>,
  );
}

describe('CaseStudyPage', () => {
  it('renders HR decision support case study', () => {
    renderCaseStudy('hr-decision-support');
    expect(
      screen.getByRole('heading', { name: /Automated HR Decision Support Tool/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Overview' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Current limitations' })).toBeInTheDocument();
  });

  it('shows 404 for unknown project slug', () => {
    render(
      <DarkModeProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </DarkModeProvider>,
    );
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
