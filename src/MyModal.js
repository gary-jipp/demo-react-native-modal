import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View, TextInput} from 'react-native';
import Modal from 'components/Modal';
import Button from 'components/Button';

const MyModal = function (props) {
  const [input, setInput] = useState('');

  const close = () => props.setVisible(!props.visible);

  return (
    <Modal visible={props.visible} onRequestClose={close}>
      <Text style={styles.titleText}>Hello React Native</Text>
      <Text style={styles.userText}>{input}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type something"
          style={styles.input}
          onChangeText={setInput}
          value={input}
        />
      </View>
      <Button title="OK" onPress={close} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  userText: {
    width: '100%',
    padding: 10,
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    fontSize: 24,
  },
  inputContainer: {
    borderColor: 'gray',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
});

export default MyModal;
