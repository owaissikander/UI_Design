import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoursesPage from './CoursesPage'
import Dashboard from './Dashboard'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './HomeScreen'
import Login from './Login'
import EventsPage from './EventsPage'
import ProfilePage from './ProfilePage'
import QRPage from './QRPage'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Notifications from './Notifications'


const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function DashTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { // This is where you put styles for the entire tab bar container
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    height: 55,
                    marginHorizontal: 12,
                    backgroundColor: '#1A2980',
                    borderColor: '#1A2980', // Corrected spelling
                    // Add shadow for iOS
                    //   shadowColor: '#000',
                    //   shadowOffset: { width: 0, height: 2 },
                    //   shadowOpacity: 0.25,
                    //   shadowRadius: 3.84,
                    // For Android, elevation will handle the "shadow" part
                    // Note: `elevation: 0` in your original means no shadow on Android
                    // If you want a shadow on Android, remove `elevation: 0` or set a higher value
                    // based on your desired depth. If you truly want no shadow, then `elevation: 0` is fine.
                    //elevation: 5, // A typical value for a subtle shadow
                },
                // You might also want to adjust the individual tab item styles if needed
                // tabBarItemStyle: {
                //   // e.g., justifyContent: 'center', alignItems: 'center',
                // },
                // To hide the default header that might overlap
                //headerShown: false,
                // Other options like tint colors for icons/labels
                tabBarActiveTintColor: '#FFFFFF', // Example active color
                tabBarInactiveTintColor: '#26D0CE', // Example inactive color
                tabBarShowLabel: true, // Whether to show labels below icons
            }}

            initialRouteName='Dashboard'>


            <Tab.Screen name='Dashboard'
                component={Dashboard}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<Entypo name='home' color={color} size={size} />)
                }}

            />


            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome5 name='play' color={color} size={size} />)
                }}
                name='Courses'
                component={CoursesPage} />


            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome name='star' color={color} size={size} />)
                }}
                name='Events'
                component={EventsPage} />


            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<FontAwesome name='user' color={color} size={size} />)
                }}
                name='Profile'
                component={ProfilePage} />


            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (<AntDesign name='qrcode' color={color} size={size} />)
                }}
                name='QR Code'
                component={QRPage} />
        </Tab.Navigator>
    )
}


const Auth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HOME' >
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name='HOME'
                    component={HomeScreen}
                />
                <Stack.Screen options={{
                    headerShown: false
                }} name='Login' component={Login} />

                <Stack.Screen options={{
                    headerShown: false
                }} name='Noti' component={Notifications} />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name='DashTabs'
                    component={DashTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Auth

const styles = StyleSheet.create({})