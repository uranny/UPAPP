import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/home';
import SystemScreen from './tabs/system';

export default function Index() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name='home' component={HomeScreen}/>
      <Tab.Screen name='system' component={SystemScreen}/>
    </Tab.Navigator>
  );
}