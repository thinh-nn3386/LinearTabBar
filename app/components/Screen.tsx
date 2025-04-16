import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../theme';

interface ScreenProps {
  title: string;
  backgroundColor?: string;
}

export const Screen = ({
  title,
  backgroundColor = colors.systemGray.gray6,
}: ScreenProps) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: backgroundColor || colors.systemGray.gray3},
      ]}>
      <Text style={styles.text}>{title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.text.primary,
  },
});
