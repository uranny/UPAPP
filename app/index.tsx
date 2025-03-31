import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../component/tabs/home';
import RallyScreen from '../component/tabs/rally';
import JobScreen from '../component/tabs/job';
import CommunityScreen from '../component/tabs/community';
import SystemScreen from '../component/tabs/system';
import Icon from "react-native-vector-icons/Ionicons"
import React from 'react';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();

interface TabProps {
  title: string;
  component: React.ComponentType;
  icon: string;
}

const tabs: TabProps[] = [
  { title: 'Home', component: HomeScreen, icon: 'home' },
  { title: 'Rally', component: RallyScreen, icon: 'trophy' },
  { title: 'Job', component: JobScreen, icon: 'document-text' },
  { title: 'Community', component: CommunityScreen, icon: 'chatbubbles' },
  { title: 'System', component: SystemScreen, icon: 'settings' }
];

export default function Index() {
  return (
    <SafeAreaView style={{flex : 1}}>
      <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: '#000000', 
        tabBarInactiveTintColor: '#AEAEAE', 
        tabBarStyle : {
          height:60,
          paddingTop:8,
          paddingHorizontal:12
        }
      }}
      >
        {tabs.map(({title, component, icon}) => (
          <Tab.Screen
          key={title}
          name={title}
          component={component} 
          options={
            {tabBarIcon:({color, size}) => (
            <Icon name={icon} size={size} color={color}/>
          )}}/>
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  );
}