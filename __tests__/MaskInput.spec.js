import React from 'react';
import { shallow } from 'enzyme';

import { MaskInput } from '../index';

const mountComponent = (mask) => {
  return shallow(<MaskInput onChange={() => {}} mask={mask} />);
};

describe('MaskInput', () => {
  it('should mask the value correctly correctly', () => {
    const wrapper = mountComponent('##/##/####');

    wrapper.setProps({ value: '21032019' });

    expect(wrapper.props().value).toBe('21/03/2019');
  });

  it('should remove all non numeric characters from value', () => {
    const wrapper = mountComponent('##/##/####');

    wrapper.setProps({ value: '210a32f019' });

    expect(wrapper.props().value).toBe('21/03/2019');
  });

  test('should limit value length at the maximum length of the mask', () => {
    const wrapper = mountComponent('##/##/####');

    wrapper.setProps({ value: '210a32f01912' });

    expect(wrapper.props().value).toBe('21/03/2019');
  });
});
