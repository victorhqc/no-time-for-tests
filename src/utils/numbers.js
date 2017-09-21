/* eslint import/prefer-default-export: 0 */

export const formatPrice = (number, options = { country: 'US', currency: 'USD' }) =>
  (number / 100).toLocaleString(options.country, {
    style: 'currency',
    currency: options.currency,
  });
