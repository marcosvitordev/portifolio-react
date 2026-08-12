import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 640);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <a
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      href="#home"
      aria-label="Voltar ao início"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp aria-hidden="true" />
    </a>
  );
}
