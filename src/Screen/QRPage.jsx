import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'

const QRPage = () => {


    
    return (
        <SafeAreaView>
            <Header isIdentity={true} />
            <View style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}>
                <Image
                    style={{ width: 82, height: 82, borderRadius: 100 }}
                    source={require('../assets/ProfilePic.png')}
                />
                <View style={{ marginTop: 12 }} >
                    <Text style={{ color: '#6B6B6B', fontWeight: 600, fontSize: 18, lineHeight: 20 }}>
                        Owais Khan</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{
                     
                    height: 60,
                    width: 225,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                     shadowRadius: 5,
                    shadowColor: '#888888', // The color from your CSS
                    shadowOffset: {
                        width: 0,   // 0px horizontal offset
                        height: -10,
                         // -10px vertical offset (upwards)
                    },
                    shadowOpacity: 1, // Full opacity as no alpha was specified in the CSS
                    shadowRadius: 0,elevation: 5
                    
                }}>
                    <Text style={{ fontWeight: 600, fontSize: 18, color: '#1A2980' }}>UX UI Desiging Course</Text>
                </View>
                <Image
                    style={{ marginTop: 6 }}
                    source={require('../assets/qr-code1.png')} />
            </View>
        </SafeAreaView>
    )
}

export default QRPage

const styles = StyleSheet.create({})