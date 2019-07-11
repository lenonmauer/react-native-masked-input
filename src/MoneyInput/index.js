import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import {
  formatNumberToCurrency,
  formatCurrencyToNumber,
  getDefaultOptions,
  getValueInRange,
} from './utils';

const MoneyInput = (props) => {
  const { value, min, max } = props;
  const options = getDefaultOptions(props);
  const initialValue = formatNumberToCurrency(value, options);

  function handleChange(text) {
    const { onChange } = props;
    const numberValue = formatCurrencyToNumber(text, options.precision);
    const finalValue = getValueInRange(numberValue, min, max);
    onChange(finalValue);
  }

  return (
    <TextInput
      {...props}
      keyboardType="number-pad"
      value={initialValue}
      onChangeText={handleChange}
    />
  );
};

MoneyInput.propTypes = {
  ...TextInput.propTypes,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  locale: PropTypes.string,
  currencyStyle: PropTypes.string,
  precision: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};

MoneyInput.defaultProps = {
  ...TextInput.defaultProps,
  locale: 'pt-br',
  currencyStyle: 'BRL',
  precision: 2,
  min: undefined,
  max: undefined,
};

export default MoneyInput;
