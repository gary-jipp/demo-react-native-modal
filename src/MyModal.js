import React from 'react';
import {Modal, StyleSheet} from 'react-native';
import {View} from 'react-native';

const MyModal = function (props) {
  const close = () => props.setVisible(!props.visible);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={close}>
      <View style={styles.modalView} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default MyModal;
