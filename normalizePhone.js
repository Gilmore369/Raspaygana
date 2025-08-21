function normalizePhone(v) {
  return (v || '').replace(/\D/g, '');
}
module.exports = normalizePhone;
