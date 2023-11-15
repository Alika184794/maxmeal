import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screen/Welcome'
import Signup from '../screen/Signup'
import Login from '../screen/Login'
import Verification from '../screen/Verification'
import Resset from '../screen/Resset'
import Phone from '../screen/Phone' 
import Forget from '../screen/Forget'  
import FavouriteScreen from '../screen/FavouriteScreen'  
import OrderScreen from '../screen/OrderScreen'  
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen' 
 
import WaitlistScreen from '../screen/WaitlistScreen';
import NotificationScreen from '../screen/NotificationScreen';
import AddressScreen from '../screen/AddressScreen';
import CartScreen from '../screen/CartScreen';
import ReviewScreen from '../screen/ReviewScreen';
import ProfileScreen from '../screen/ProfileScreen'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}  
      options={{ 
      tabBarShowLabel:false,
      tabBarLabel:"Home",
      headerShown:false,
      tabBarIcon:({focused}) => focused?
      <MaterialIcons name="home" size={24} color="#FE724C" /> :
      <MaterialIcons name="home" size={24} color="#FE724C" />       
      }}
      
      />

      
      <Tab.Screen
      name="Address" 
      component={AddressScreen}
      
      options={{ 
        tabBarShowLabel:false,
        tabBarLabel:"Address",
        headerShown:false,
        tabBarIcon:({focused}) => focused?
        <Ionicons name="ios-location-sharp" size={24} color="#FE724C" /> :
        <Ionicons name="ios-location-sharp" size={24} color="#FE724C" />       
        }}
        />


      <Tab.Screen 
      name="Cart" 
      component={CartScreen}

      options={{
        tabBarShowLabel:false,
        tabBarLabel:"Cart",
        headerShown:false,
        tabBarIcon:({focused}) => focused?
        <FontAwesome name="shopping-bag" size={24} color="#FE724C" /> :
        <FontAwesome name="shopping-bag" size={24} color="#FE724C" /> 
      }}
      />


      <Tab.Screen
       name="Wait" 
       component={WaitlistScreen}         
       options={{
        tabBarShowLabel:false,
        tabBarLabel:"Wait",
        headerShown:false,
        tabBarIcon:({focused}) => focused?
        <MaterialIcons name="favorite" size={24} color="#D3D1D8" /> :
        <MaterialIcons name="favorite" size={24} color="#D3D1D8" /> 
      }}       
       />


       


      <Tab.Screen
       name="Notification" 
       component={NotificationScreen} 

       options={{
        tabBarShowLabel:false,
        tabBarLabel:"Notification",
        headerShown:false,
        tabBarIcon:({focused}) => focused?
        <Ionicons name="notifications-circle-outline" size={24} color="#FE724C" />  :
        <Ionicons name="notifications-circle-outline" size={24} color="#FE724C" /> 
      }}

          
          />
    </Tab.Navigator>
  );
}

export default function StackNavigation() {
    const stack = createNativeStackNavigator();
  return (
 <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='Welcome' component={Welcome} options={{headerShown :false}}/>
        <stack.Screen name='Signup' component={Signup} options={{headerShown :false}}/>
        <stack.Screen name='Login' component={Login} options={{headerShown :false}}/>
        <stack.Screen name='Verification' component={Verification}options={{headerShown :false}}/>
        <stack.Screen name='Resset' component={Resset} options={{headerShown :false}}/>
        <stack.Screen name='Phone' component={Phone} options={{headerShown :false}}/> 
        <stack.Screen name='Forget' component={Forget} options={{headerShown :false}}/> 
        <stack.Screen name='Main' component={MyTabs} options={{headerShown :false}}/>  
        <stack.Screen name='Review' component={ReviewScreen} options={{headerShown :false}}/>  
        
        <stack.Screen name='Profile' component={ProfileScreen} options={{headerShown :false}}/>  
        
        <stack.Screen name='Favourite' component={FavouriteScreen} options={{headerShown :false}}/>  
        
        <stack.Screen name='Order' component={OrderScreen} options={{headerShown :false}}/>  
        
        

    </stack.Navigator>
 </NavigationContainer>
  )
}