import {Appearance, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';
type spaceProps = PropsWithChildren<{character: string}>;
export default function Space({character}: spaceProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.symbol}>{character}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: Appearance.getColorScheme() === 'light' ? 'black' : 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  symbol: {
    color: Appearance.getColorScheme() === 'light' ? 'black' : 'white',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 600,
  },
});
