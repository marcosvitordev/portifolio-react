import { validateContactForm } from '@/utils/contactValidation';

describe('validateContactForm', () => {
  it('aceita dados válidos e ignora espaços externos', () => {
    expect(
      validateContactForm({
        name: '  Marcos Vitor  ',
        email: ' marcos@example.com ',
        message: ' Uma mensagem suficientemente detalhada. ',
        company: '',
      }),
    ).toEqual({});
  });

  it('limita mensagens excessivamente longas', () => {
    const errors = validateContactForm({
      name: 'Marcos',
      email: 'marcos@example.com',
      message: 'a'.repeat(1501),
      company: '',
    });
    expect(errors.message).toMatch(/1.500/);
  });
});
