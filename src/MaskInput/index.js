import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { applyMask } from './utils';

const MaskInput = (props) => {
  const { value, mask, onChange } = props;
  const initialValue = applyMask(value, mask);

  function handleChange(text) {
    const maskedValue = applyMask(text, mask);
    onChange(maskedValue);
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

MaskInput.propTypes = {
  ...TextInput.propTypes,
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

MaskInput.defaultProps = {
  ...TextInput.defaultProps,
};

export default MaskInput;
