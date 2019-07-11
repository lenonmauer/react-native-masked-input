export const getDefaultOptions = ({
  delimiter = ',',
  separator = '.',
  prefix = 'R$ ',
  suffix = '',
  precision = 2,
  min = 0,
  max = 0,
}) => ({
  delimiter,
  separator,
  prefix,
  suffix,
  precision,
  min,
  max,
});

export const formatNumberToCurrency = (value = 0, options) => {
  const { delimiter, prefix, suffix, precision, min, max } = options;
  const [integerPt, decimalPt] = getValueInRange(value, min, max)
    .toFixed(precision)
    .split('.');
  const integerPartWithSeparator = integerPt.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    `$1${options.separator}`
  );

  return `${prefix}${integerPartWithSeparator}${delimiter}${decimalPt}${suffix}`;
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
