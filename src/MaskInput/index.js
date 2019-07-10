import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { applyMask } from './utils';

const MaskInput = (props, ref) => {
  const { value, mask, onChange } = props;
  const initialValue = applyMask(value, mask);

  function handleChange(text) {
    const maskedValue = applyMask(text, mask);
    onChange(maskedValue);
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

MaskInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  mask: PropTypes.string,
};

export default React.forwardRef(MaskInput);
