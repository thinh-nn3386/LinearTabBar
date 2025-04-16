import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../theme';

type TabItemProps = {
  icon: IconTypes;
  path: () => void;
  isActive: boolean;
};

export const TabItem = ({icon, action, isActive}: TabItemProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.fillCenter}>
      <Icon
        icon={(isActive ? icon + '-fill' : icon) as IconTypes}
        size={24}
        color={isActive ? colors.text.primary : colors.text.secondary}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fillCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
