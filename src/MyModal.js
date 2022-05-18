import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable} from 'react-native';
import {View, TextInput} from 'react-native';
import Button from 'components/Button';

const MyModal = function (props) {
  const [input, setInput] = useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        props.setVisible(!props.visible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello React Native</Text>
          <Text style={styles.userText}>{input}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type something"
              style={styles.input}
              onChangeText={setInput}
              value={input}
            />
          </View>
          <Button title="OK" onPress={() => props.setVisible(!props.visible)} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  pressable: function ({pressed}) {
    return {
      opacity: pressed ? 0.8 : 1.0,
    };
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  modalView: {
    width: '95%',
    height: '95%',
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 12,
  },
  modalText: {
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
