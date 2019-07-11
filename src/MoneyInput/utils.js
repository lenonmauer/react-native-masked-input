export const getDefaultOptions = ({ delimiter, separator, prefix, precision, locale }) => ({
  delimiter: delimiter || ',',
  separator: separator || '.',
  prefix: prefix || 'R$ ',
  precision: precision || 2,
  locale: locale || 'pt-br',
});

export const formatNumberToCurrency = (value = 0, options) => {
  const { prefix, precision, locale } = options;
  const currencyValue = value.toLocaleString(locale, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });

  return `${prefix}${currencyValue}`;
};

export const formatCurrencyToNumber = (value, precision) => {
  const valueClean = value.replace(/[^0-9]/g, '');
  const coeficient = 1 / Math.pow(10, precision);

  return Number(valueClean) * coeficient;
};

export const getValueInRange = (value, min, max) => {
  if (max && value > max) {
    return max;
  } else if (min && value < min) {
    return min;
  } else {
    return value;
  }
};
