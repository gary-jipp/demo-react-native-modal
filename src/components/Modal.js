import React from 'react';
import {Modal as RNModal, StyleSheet, View} from 'react-native';

const Modal = function (props) {
  return (
    <RNModal
      animationType={props.slide || 'slide'}
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={styles.modalView}>
        <View style={styles.cardView}>{props.children}</View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  cardView: {
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
});

export default Modal;
