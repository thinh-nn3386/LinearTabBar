import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../theme';
import {Icon, IconTypes} from '../../components';

type TabItemProps = {
  icon: IconTypes;
  action: () => void;
  isActive: boolean;
  opacity?: number;
};

export const TabItem = ({
  icon,
  action,
  isActive,
  opacity = 1,
}: TabItemProps) => {
  return (
    <TouchableOpacity onPress={action} style={[styles.fillCenter, {opacity}]}>
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
