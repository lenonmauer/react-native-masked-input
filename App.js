import React, { Fragment } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { MaskInput, MoneyInput } from './src/index';

class App extends React.Component {
  state = {
    dateValue: '21032003',
    cpfValue: '01011138908',
    moneyValue: 10,
  };

  handleChangeDateInput = (value) => {
    this.setState({
      dateValue: value,
    });
  };

  handleChangeCpfInput = (value) => {
    this.setState({
      cpfValue: value,
    });
  };

  handleChangeMoneyInput = (value) => {
    this.setState({
      moneyValue: value,
    });
  };

  render() {
    const { moneyValue, dateValue, cpfValue } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Mask Date</Text>
          <MaskInput
            style={styles.input}
            mask="##/##/####"
            value={dateValue}
            onChange={this.handleChangeDateInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Mask CPF</Text>
          <MaskInput
            style={styles.input}
            mask="###.###.###-##"
            value={cpfValue}
            onChange={this.handleChangeCpfInput}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Money</Text>
          <MoneyInput
            style={styles.input}
            value={moneyValue}
            onChange={this.handleChangeMoneyInput}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  inputContainer: {
    marginTop: 20,
  },

  input: {
    borderRadius: 5,
    height: 50,
    width: 200,
    borderWidth: 1,
    padding: 5,
    borderColor: '#dadada',
  },
});

export default App;
