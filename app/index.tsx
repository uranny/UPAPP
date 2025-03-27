import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/tabs/home';
import RallyScreen from '../component/tabs/rally';
import JobScreen from '../component/tabs/job';
import CommunityScreen from '../component/tabs/community';
import SystemScreen from '../component/tabs/system';
import Icon from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarActiveTintColor: '#000000', 
      tabBarInactiveTintColor: '#AEAEAE', 
      tabBarStyle : {
        paddingTop:4,
        paddingBottom:8,
        paddingHorizontal:12
      }
    }}
    >
      <Tab.Screen 
        name='Home' 
        component={HomeScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="home" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Rally' 
        component={RallyScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="trophy" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Job' 
        component={JobScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="document-text" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='Community' 
        component={CommunityScreen} 
        options={
          {tabBarIcon:({color, size}) => (
          <Icon name="chatbubbles" size={size} color={color}/>
        )}}/>
      <Tab.Screen 
        name='System' 
        component={SystemScreen}
        options={
          {tabBarIcon:({color, size}) => (
            <Icon name="settings" size={size} color={color}/>
          )}}/>
    </Tab.Navigator>
  );
}