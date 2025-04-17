import {StyleSheet, View} from 'react-native';
import {TabItem} from './TabItem';
import {BaseTabs, TopLayerTabs, UnderLayerTabs} from './constant';
import {IconTypes} from '../../components';
import {colors} from '../../theme';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSharedTransitionProgress} from '../../hook/useSharedProgress';

const tabBarHeight = 86;

interface TabBarProps {
  activeScreenName: string;
}

export const TabBar = ({activeScreenName}: TabBarProps) => {
  const progress = useSharedTransitionProgress();

  const $baseTabStyle = useAnimatedStyle(() => {
    // console.log('progress', progress.value)
    const opacity = interpolate(progress.value, [0, 1], [1, 0]);
    return {
      opacity: opacity ** 2,
      pointerEvents: opacity === 0 ? 'none' : 'auto',
      transform: [{translateX: interpolate(progress.value, [0, 1], [0, -25])}],
    };
  });

  const $topLayerTabStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1]);
    return {
      opacity: opacity ** 2,
      pointerEvents: opacity === 0 ? 'none' : 'auto',
      transform: [{translateX: interpolate(progress.value, [0, 1], [25, 0])}],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {/* Notes tab */}
        {UnderLayerTabs.map((screen, index) => {
          if (screen.id === '') {
            return <View key={index} style={styles.empty} />;
          }

          return (
            <TabItem
              key={screen.id}
              icon={screen.icon as IconTypes}
              action={screen.action}
              isActive={screen.id === activeScreenName}
            />
          );
        })}
      </View>
      <Animated.View style={[styles.tabsContainer, $baseTabStyle]}>
        {BaseTabs.map(screen => {
          return (
            <TabItem
              key={screen.id}
              icon={screen.icon as IconTypes}
              action={screen.action}
              opacity={screen.id === 'note' ? 0.2 : 1}
              isActive={screen.id === activeScreenName}
            />
          );
        })}
      </Animated.View>

      <Animated.View style={[styles.tabsContainer, $topLayerTabStyle]}>
        {TopLayerTabs.map((screen, index) => {
          if (screen.id === '') {
            return <View key={index} style={styles.empty} />;
          }

          return (
            <TabItem
              key={screen.id}
              icon={screen.icon as IconTypes}
              action={screen.action}
              opacity={screen.id === 'note' ? 0.2 : 1}
              isActive={screen.id === activeScreenName}
            />
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: tabBarHeight,
    backgroundColor: colors.background.secondary,
    borderTopWidth: 1,
    borderTopColor: colors.separator.opaque,
  },
  tabsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 16,
  },
  empty: {
    flex: 1,
    pointerEvents: 'none',
  },
});
