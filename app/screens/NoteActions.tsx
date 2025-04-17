import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

export function NoteActions() {
  const navigation = useNavigation();
  const actions = [
    {
      text: 'Actions 1',
      action: () => {
        console.log('111');
      },
    },
    {
      text: 'Actions 2',
      action: () => {
        console.log('222');
      },
    },
    {
      text: 'Actions 3',
      action: () => {
        console.log('333');
      },
    },
    {
      text: 'Close',
      action: () => {
        navigation.goBack();
      },
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.text}>Note Actions</Text>
      </View>
      <View style={styles.actionsContainer}>
        {actions.map((action, index) => (
          <TouchableOpacity
            key={index}
            onPress={action.action}
            style={styles.actions}>
            <Text style={styles.text}>{action.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.text.primary,
    fontSize: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  actionsContainer: {
    padding: 16,
    marginBottom: 100,
  },
  actions: {
    backgroundColor: colors.systemGray.gray3,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
});
