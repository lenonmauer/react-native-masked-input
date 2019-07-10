import React, { Fragment } from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

import { MaskInput, MoneyInput } from "../index";

const App = () => {
  return (
    <Fragment>
      <View>
        <MaskInput style={styles.input} />
        <MoneyInput style={styles.input} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 200,
    borderWidth: 1,
    borderColor: '#dadada',
  }
});

export default App;
