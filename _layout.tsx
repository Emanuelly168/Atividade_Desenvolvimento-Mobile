import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Referência [cite: 20]

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="square-outline" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="favorites" 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="star-outline" size={28} color={color} /> }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{ tabBarIcon: ({ color }) => <Ionicons name="circle-outline" size={28} color={color} /> }} 
      />
    </Tabs>
  );
}