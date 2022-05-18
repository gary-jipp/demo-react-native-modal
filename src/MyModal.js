import React from 'react';
import {Modal} from 'react-native';

const MyModal = function (props) {
  const close = () => props.setVisible(!props.visible);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={close}
    />
  );
};

export default MyModal;
