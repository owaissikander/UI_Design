import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'

const ProfilePage = () => {
  const screenWidth = Dimensions.get('window').width
  return (
    <SafeAreaView>
      <Header isProfile={true} />
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: 175
      }}>
        <Image
          style={{
            width: 135,
            height: 135,
            borderRadius: 100,
            resizeMode: 'cover'
          }}
          source={require('../assets/ProfilePic.png')}
        />

      </View>
      <View>
        <View style={{ marginTop: 6 }}>
          <View style={{
            borderWidth: 2,
            height: 60,
            marginHorizontal: 15,
            padding: 7,
            borderColor: '#e3dede',
            borderRadius: 5
          }}>
            <Text style={{
              fontWeight: 500,
              fontSize: 12,
              marginStart: 4
            }} >Full name</Text>
            <TextInput style={{
              marginBottom: 7,
              fontWeight: 600,
              fontSize: 15
            }} placeholder='Owais Khan'>

            </TextInput>
          </View>
          <View style={{
            borderWidth: 2,
            height: 60,
            marginHorizontal: 15,
            padding: 7,
            borderColor: '#e3dede',
            borderRadius: 5
          }}>
            <Text style={{
              fontWeight: 500,
              fontSize: 12,
              marginStart: 4
            }} >Email Address</Text>
            <TextInput style={{
              marginBottom: 7,
              fontWeight: 600,
              fontSize: 15
            }} placeholder='owais@gmail.com'>

            </TextInput>
          </View>

          <View style={{ borderWidth: 2, marginTop: 8, height: 60, marginHorizontal: 15, padding: 7, borderColor: '#e3dede', borderRadius: 5 }}>
            <Text style={{ fontWeight: 500, fontSize: 12, marginStart: 4 }} >Password</Text>
            <TextInput style={{ marginBottom: 7, fontWeight: 600, fontSize: 15 }} placeholder='******'>

            </TextInput>
          </View>

        </View>


      </View>
      <Text
        style={{
          marginHorizontal: 15,
          paddingTop: 10, color: '#000000', fontWeight: 600, fontSize: 15
        }}>Change Password</Text>

      <View style={{ borderWidth: 2, marginTop: 8, height: 60, marginHorizontal: 15, padding: 7, borderColor: '#e3dede', borderRadius: 5 }}>
        <Text style={{ fontWeight: 500, fontSize: 12, marginStart: 4 }} >Old Password</Text>
        <TextInput style={{ marginBottom: 7, fontWeight: 600, fontSize: 15 }} placeholder='******'>

        </TextInput>
      </View>
      <View style={{ borderWidth: 2, marginTop: 8, height: 60, marginHorizontal: 15, padding: 7, borderColor: '#e3dede', borderRadius: 5 }}>
        <Text style={{ fontWeight: 500, fontSize: 12, marginStart: 4 }} >New Password</Text>
        <TextInput style={{ marginBottom: 7, fontWeight: 600, fontSize: 15 }} placeholder='******'>

        </TextInput>
      </View>

    </SafeAreaView>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})