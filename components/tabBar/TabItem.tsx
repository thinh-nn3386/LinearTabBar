import {StyleSheet, TouchableOpacity} from 'react-native';
import React, { useCallback } from 'react';
import {colors} from '../../theme';
import { Icon, IconTypes } from '../Icon';
import { useRouter } from 'expo-router';

type TabItemProps = {
  icon: IconTypes;
  path: string;
  isActive: boolean;
  opacity?: number;
};

export const TabItem = ({icon, path, isActive, opacity = 1}: TabItemProps) => {
  const router = useRouter()
  
  const onPress = useCallback(() => {
    router.navigate(path as never)
  }, [path, router])

  return (
    <TouchableOpacity onPress={onPress} style={[styles.fillCenter, {opacity}]}>
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
