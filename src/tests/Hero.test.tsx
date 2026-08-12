import { render, screen } from '@testing-library/react';
import { Hero } from '@/components/sections/Hero';

describe('Hero', () => {
  it('apresenta identidade, chamadas principais e currículo real', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/marcos vitor/i);
    expect(screen.getByRole('link', { name: /ver projetos/i })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', { name: /diga olá/i })).toHaveAttribute('href', '#contact');
    expect(screen.getByRole('link', { name: /currículo/i })).toHaveAttribute('download');
    expect(screen.getByAltText(/marcos vitor sorrindo/i)).toHaveAttribute('fetchpriority', 'high');
  });
});
