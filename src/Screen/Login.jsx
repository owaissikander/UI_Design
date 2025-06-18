import { View, Text, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import CustomeKeyoardView from '../constants/CustomeKeyoardView'
const Login = () => {
  const screenWidth = Dimensions.get('window').width
  const navigation = useNavigation()
  return (
    <CustomeKeyoardView>
      <SafeAreaView>
        <Header />
        <ScrollView>


          <LinearGradient
            colors={['#1A2980', "#26D0CE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: 260, backgroundColor: 'red' }}>
            <View>
              <Image
                style={{ height: 360, width: screenWidth, marginTop: 10 }}
                source={require('../assets/Login.png')}
              />
            </View>

          </LinearGradient>
          <View style={{ marginTop: 100 }}>
            <View style={{ borderWidth: 2, height: 60, marginHorizontal: 15, padding: 7, borderColor: '#e3dede', borderRadius: 5 }}>
              <Text style={{ fontWeight: 500, fontSize: 12, marginStart: 4 }} >Email Address</Text>
              <TextInput style={{ marginBottom: 7, fontWeight: 600, fontSize: 15 }} placeholder='owais@gmail.com'>

              </TextInput>
            </View>

            <View style={{ borderWidth: 2, marginTop: 8, height: 60, marginHorizontal: 15, padding: 7, borderColor: '#e3dede', borderRadius: 5 }}>
              <Text style={{ fontWeight: 500, fontSize: 12, marginStart: 4 }} >Password</Text>
              <TextInput style={{ marginBottom: 7, fontWeight: 600, fontSize: 15 }} placeholder='******'>

              </TextInput>
            </View>

          </View>


          <View style={{
            width: screenWidth, height: 50,
            justifyContent: 'flex-start',
            alignItems: 'flex-end', paddingHorizontal: 20, marginTop: 8
          }}>
            <Text style={{ fontWeight: 500, fontSize: 15 }}>
              Forget Password?
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('DashTabs')}>
            <LinearGradient
              colors={['#1A2980', "#26D0CE"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 15,
                paddingHorizontal: 20,
                borderRadius: 8,
                height: 60,
                marginTop: 10,
                alignItems: 'center',
                backgroundColor: 'blue'
              }}>
              <Text style={{ color: '#FFFFFF', fontWeight: 600, fontSize: 15 }}>Login</Text>
              <View>
                <MaterialIcons name={'chevron-right'} size={35} color={'#FFFFFF'} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </CustomeKeyoardView>

  )
}

export default Login