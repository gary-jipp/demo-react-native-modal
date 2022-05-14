import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import MyModal from 'MyModal';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <MyModal visible={visible} setVisible={setVisible} />
      <Pressable style={styles.button} onPress={() => setVisible(true)}>
        <Text style={styles.textStyle}>Hello Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F0',
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
});

export default App;
