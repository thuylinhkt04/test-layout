export const formatCurrency = (value?: number, emptyString?: string | null) => {
  if (typeof value === 'undefined' || Number.isNaN(value)) {
    return emptyString || '--';
  }
  const newValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'name',
  })
    .formatToParts(value)
    .map((p) => (p.type !== 'literal' && p.type !== 'currency' ? p.value : ''))
    .join('');

  return newValue;
};

export const formatNumber = (value?: number, emptyString?: string | null) => {
  if (typeof value === 'undefined' || Number.isNaN(value)) {
    return emptyString || '--';
  }
  const newValue = new Intl.NumberFormat('vi-VI').format(value)

  return newValue;
};