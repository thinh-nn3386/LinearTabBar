import React, { useCallback } from 'react';
import { Tabs } from 'expo-router';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBar } from '@/components/tabBar';


export default function TabLayout() {
  const tabBar = useCallback((props: BottomTabBarProps) => {
    const activeScreenName = props.state.routeNames[props.state.index]
    return <TabBar activeScreenName={activeScreenName} />
  }, [])

  
  return (
    <Tabs tabBar={tabBar}  screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="(home-stack)" />
      <Tabs.Screen name="inbox" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}