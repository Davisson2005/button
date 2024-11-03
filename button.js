import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, FAB } from 'react-native-paper';

const App = () => {
  const onPressAdd = () => {
    console.log('FAB pressed!');
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={onPressAdd}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default App;
