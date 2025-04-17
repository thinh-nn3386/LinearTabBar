import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {colors} from '../theme';
import {Icon, Screen} from '../components';

export const NoteDetail = () => {
  const navigation = useNavigation();
  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Screen title="Note Detail" />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Icon icon="arrow-left" />
        <Text style={styles.text}> Go back to home</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.systemGray.gray3,
    padding: 16,
    borderRadius: 8,
  },
  text: {
    color: colors.text.primary,
  },
});
