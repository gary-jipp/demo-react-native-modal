import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable} from 'react-native';
import {View, TextInput} from 'react-native';

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
          <Text style={styles.modalText}>Hello Modal!</Text>
          <Text style={styles.inputText}>{input}</Text>
          <View>
            <TextInput style={styles.input} onChangeText={setInput} />
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setVisible(!props.visible)}>
            <Text style={styles.textStyle}>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal >
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F0',
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
  inputText: {
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 24,
  },
});

export default MyModal;
