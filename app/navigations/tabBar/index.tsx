import {StyleSheet, View} from 'react-native';
import {TabItem} from './TabItem';
import {BaseTabs} from './constant';
import {IconTypes} from '../../components';
import {colors} from '../../theme';

const tabBarHeight = 86;

interface TabBarProps {
  activeScreenName: string;
}

export const TabBar = ({activeScreenName}: TabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        {BaseTabs.map(screen => {
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
    borderTopColor: colors.text.placeholder,
  },
  tabsContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 16,
  },
});
