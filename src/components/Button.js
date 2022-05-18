import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

const Button = props => {
  return (
    <Pressable style={styles.pressable} onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: function ({pressed}) {
    return {opacity: pressed ? 0.8 : 1.0};
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#777',
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#EEE',
  },
});

export default Button;
