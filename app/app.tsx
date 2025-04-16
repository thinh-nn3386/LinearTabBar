import {StatusBar, StyleSheet, View} from 'react-native';
import {colors} from './theme';
import {AppStack} from './navigations';

export const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default"
        animated
        backgroundColor={colors.background.secondary}
      />
      <AppStack />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
});
