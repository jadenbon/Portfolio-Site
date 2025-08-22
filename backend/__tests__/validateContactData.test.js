const { validateContactData } = require('../server');

describe('validateContactData', () => {
  test('returns empty array for valid input', () => {
    const data = {
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'This is a valid message.'
    };
    expect(validateContactData(data)).toEqual([]);
  });

  test('returns errors for missing fields', () => {
    const data = { name: '', email: '', message: '' };
    const errors = validateContactData(data);
    expect(errors).toContain('Name must be at least 2 characters long');
    expect(errors).toContain('Please provide a valid email address');
    expect(errors).toContain('Message must be at least 10 characters long');
  });

  test('returns error for invalid email', () => {
    const data = {
      name: 'Jane Doe',
      email: 'invalid-email',
      message: 'This is a valid message.'
    };
    const errors = validateContactData(data);
    expect(errors).toContain('Please provide a valid email address');
    expect(errors).toHaveLength(1);
  });
});
