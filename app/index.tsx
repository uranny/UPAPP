import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './tabs/home';
import SystemScreen from './tabs/system';
import RallyScreen from './tabs/rally';
import JobScreen from './tabs/job';
import CommunityScreen from './tabs/community';
import Icon from "react-native-vector-icons/Ionicons"

export default function Index() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator 
    screenOptions={{headerShown:false,tabBarShowLabel:false}}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="home-outline" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Rally' 
        component={RallyScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="trophy-outline" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Job' 
        component={JobScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="business-outline" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Community' 
        component={CommunityScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="chatbox-ellipses-outline" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='System' 
        component={SystemScreen}
        options={
          {tabBarIcon:({color, size}) => (
            <Icon name="settings-outline" size={size} color={color}/>
          )}}/>
    </Tab.Navigator>
  );
}