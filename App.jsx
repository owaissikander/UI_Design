import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/Screen/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/Screen/Dashboard';
import CoursesPage from './src/Screen/CoursesPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Auth from './src/Screen/Auth';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <Auth />

  )
}

export default App

const styles = StyleSheet.create({})

