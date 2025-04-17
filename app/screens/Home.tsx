import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors} from '../theme';
import {Screen} from '../components';

import {useReanimatedTransitionProgress} from 'react-native-screens/reanimated';
import {useAnimatedReaction} from 'react-native-reanimated';
import {SharedTransitionProgress} from '../hook/useSharedProgress';

export const Home = () => {
  const navigation = useNavigation();

  const {progress, goingForward} = useReanimatedTransitionProgress();

  useAnimatedReaction(
    () => progress.value,
    value => {
      SharedTransitionProgress.value = goingForward.value ? value : 1 - value;
    },
    [],
  );

  const onPress = useCallback(() => {
    navigation.navigate('noteDetail' as never);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Screen title="Home" />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>Go Note</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 100,
    left: 16,
    right: 16,
    backgroundColor: colors.systemGray.gray3,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: colors.text.primary,
  },
});
