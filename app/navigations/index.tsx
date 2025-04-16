import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useCallback} from 'react';
import * as Screens from '../screens';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {TabBar} from './tabBar';
import {navigationRef} from './navigationUtilities';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="home" component={Screens.Home} />
      <HomeStack.Screen name="noteDetail" component={Screens.NoteDetail} />
    </HomeStack.Navigator>
  );
}

function TabNavigator() {
  const tabBar = useCallback((props: BottomTabBarProps) => {
    const activeScreenName = props.state.routeNames[props.state.index];
    return <TabBar activeScreenName={activeScreenName} />;
  }, []);

  return (
    <Tab.Navigator tabBar={tabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="homeStack" component={HomeStackNavigator} />
      <Tab.Screen name="inbox" component={Screens.Inbox} />
      <Tab.Screen name="search" component={Screens.Search} />
      <Tab.Screen name="settings" component={Screens.Settings} />
    </Tab.Navigator>
  );
}

export function AppStack() {
  return (
    <NavigationContainer ref={navigationRef} theme={DarkTheme}>
      <Stack.Navigator
        initialRouteName="tabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tabs" component={TabNavigator} />
        <Stack.Screen
          name="note"
          component={Screens.Note}
          options={{
            presentation: 'modal',
          }}
        />
        <Stack.Screen name="noteAction" component={Screens.NoteActions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
