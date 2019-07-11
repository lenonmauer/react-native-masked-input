import React from 'react';
import { shallow } from 'enzyme';

import { MoneyInput } from '../index';

const mountComponent = () => {
  return shallow(<MoneyInput value={0} onChange={() => {}} />);
};

describe('MoneyInput', () => {
  it('should format the value correctly when no options is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 12300000 });

    expect(wrapper.props().value).toBe('R$ 12.300.000,00');
  });

  it('should format the value to zero when no value is specified', () => {
    const wrapper = mountComponent();

    expect(wrapper.props().value).toBe('R$ 0,00');
  });

  it('should format the value correctly when the prefix is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123, prefix: '$' });

    expect(wrapper.props().value).toBe('$123,00');
  });

  it('should format the value correctly when the suffix is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123, prefix: '', suffix: '€' });

    expect(wrapper.props().value).toBe('123,00€');
  });

  it('should format the value correctly when the delimiter is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123000, delimiter: '#' });

    expect(wrapper.props().value).toBe('R$ 123.000#00');
  });

  it('should format the value correctly when the separator is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123000, separator: '#' });

    expect(wrapper.props().value).toBe('R$ 123#000,00');
  });

  it('should format the value correctly when the precision is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123, precision: 3 });

    expect(wrapper.props().value).toBe('R$ 123,000');

    wrapper.setProps({ value: 123.203 });

    expect(wrapper.props().value).toBe('R$ 123,203');
  });

  it('should format the value correctly when the min is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123, min: 200 });

    expect(wrapper.props().value).toBe('R$ 200,00');
  });

  it('should format the value correctly when the max is specified', () => {
    const wrapper = mountComponent();

    wrapper.setProps({ value: 123, max: 100 });

    expect(wrapper.props().value).toBe('R$ 100,00');
  });
});
