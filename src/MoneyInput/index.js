import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { formatNumberToCurrency, formatCurrencyToNumber, getDefaultOptions } from './utils';

const MoneyInput = (props, ref) => {
  const { value } = props;
  const options = getDefaultOptions(props);
  const initialValue = formatNumberToCurrency(value, options);

  function handleChange(text) {
    const { onChange } = props;
    const numberValue = formatCurrencyToNumber(text, options.precision);
    onChange(numberValue);
  }

  return (
    <TextInput
      {...props}
      ref={ref}
      keyboardType="number-pad"
      value={initialValue}
      onChangeText={handleChange}
    />
  );
};

MoneyInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  delimiter: PropTypes.string,
  separator: PropTypes.string,
  prefix: PropTypes.string,
  precision: PropTypes.number,
};

MoneyInput.defaultProps = {
  delimiter: ',',
  separator: '.',
  prefix: 'R$ ',
  precision: 2,
};

export default React.forwardRef(MoneyInput);
