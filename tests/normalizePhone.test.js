const normalizePhone = require('../normalizePhone');

describe('normalizePhone', () => {
  it('removes non-numeric characters', () => {
    expect(normalizePhone(' +51 999-888-777 ')).toBe('51999888777');
  });
});
