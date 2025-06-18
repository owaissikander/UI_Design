import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Header = ({
    isDash,
    isCourse,
    isEvents,
    isProfile,
    isIdentity,
    isSMIT
}) => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={['#1A2980', '#26D0CE']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 16
                }}
            >
                <TouchableOpacity onPress={() => navigation.navigate('HOME')}>
                    <MaterialIcons name={'arrow-back-ios'} size={22} color={'white'} />
                </TouchableOpacity>

                {(isDash && (
                    <Text style={{ color: 'white', fontSize: 18, marginStart: 20 }}>Dashboard</Text>
                )) ||
                    (isCourse && (
                        <Text style={{ color: 'white', fontSize: 18, marginStart: 20 }}>Course</Text>
                    )) ||
                    (isEvents && (
                        <Text style={{ color: 'white', fontSize: 18, marginStart: 20 }}>Events</Text>
                    )) ||
                    (isProfile && (
                        <Text style={{ color: 'white', fontSize: 18, marginStart: 20 }}>Profile</Text>
                    )) ||
                    (isIdentity && (
                        <Text style={{ color: 'white', fontSize: 18, marginStart: 20 }}>Identity</Text>
                    )) ||
                    (isSMIT && (
                        <Text style={{ color: 'white', fontSize: 18 }}>SMIT</Text>
                    ))}
                {(isSMIT && (
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <AntDesign name={'user'} size={22} color={'white'} />
                    </TouchableOpacity>
                )) ||
                    (isDash && isCourse && isEvents && isProfile || (
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => navigation.navigate('Noti')}
                            >
                                <Ionicons
                                    name={'notifications-outline'}
                                    size={22}
                                    color={'white'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{}}
                                onPress={() => navigation.navigate('Login')}
                            >
                                <MaterialCommunityIcons name={'page-next-outline'} size={22} color={'white'} />
                            </TouchableOpacity>
                        </View>
                    ))}
            </View>
        </LinearGradient>
    )
}

export default Header

const styles = StyleSheet.create({})
