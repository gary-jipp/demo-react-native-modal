import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'components/Button';
import MyModal from 'MyModal';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <MyModal visible={visible} setVisible={setVisible} />
      <Button
        title="Hello Modal"
        style={styles.button}
        onPress={() => setVisible(true)}
      />
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
    backgroundColor: '#2196F0',
  }
});

export default App;
