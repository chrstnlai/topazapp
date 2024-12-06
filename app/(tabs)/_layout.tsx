import { Tabs } from 'expo-router';
// import { Slack } from 'expo-router';
import { useRouter } from 'expo-router'; // Import the useRouter hook
import React from 'react';
import { Platform } from 'react-native';
import { Button } from 'react-native';


import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();


  return (
<Tabs
  screenOptions={{
    tabBarActiveTintColor: '#F5B702',
    // headerShown: true,
    tabBarButton: HapticTab,
    tabBarStyle: {
      position: 'absolute',
      bottom: 50,
      width: 400,
      left: '20%',
      transform: [{ translateX: 15 }],
      borderRadius: 20,
      backgroundColor: '#000',
      height: 70,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: 5,
    },
  }}
>
  <Tabs.Screen
    name="index"
    options={{
      headerShown: false,
      title: 'Wallet',
      tabBarIcon: ({ color }) => <IconSymbol size={28} name="wallet.pass.fill" color={color} />,
    }}
  />
  <Tabs.Screen
    name="explore"
    options={{
      title: 'Explore',
      headerShown: false,
      tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
    }}
  />

  <Tabs.Screen
   name="profile"
   options={{
     title: 'Profile',
     headerShown: false,
     tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />, // Use "person" for a person icon
   }}
  />

  <Tabs.Screen
    name="notification"
    options={{
      headerLeft: () => <Button title="Back" onPress={() => router.back()} />,
      tabBarStyle: { display: 'none' }, // Hides the tab bar for this screen
      title: '',
      tabBarIcon: () => null, // No icon for this tab
    }}
  />

</Tabs>
    
  );
}
