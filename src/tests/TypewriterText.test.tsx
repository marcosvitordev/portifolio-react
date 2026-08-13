import { act, render, screen } from '@testing-library/react';
import { TypewriterText } from '@/components/common/TypewriterText';

describe('TypewriterText', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('mantém o texto completo disponível para leitores de tela durante a animação', () => {
    vi.useFakeTimers();
    render(<TypewriterText text="Analista de Sistemas" delay={100} speed={50} />);

    expect(screen.getByText('Analista de Sistemas')).toHaveClass('sr-only');

    act(() => vi.advanceTimersByTime(150));
    expect(document.querySelector('.typewriter-content')).toHaveTextContent('A');
  });
});
