import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
const EventsPage = () => {
  return (
    <SafeAreaView>
      <Header isEvents={true}/>
      <ScrollView>
        <View>
        
                    <FlatList
                        data={[1, 2, 3, 4]}
                        renderItem={() => {
                            return (
                                <View
                                    style={{
                                        width: 340,
                                        height: 280,
                                        padding: 6,
                                        marginTop: 10,
                                        alignItems: 'center'
                                    }}
                                >
        
                                    <View>
                                        <View style={{
                                            marginStart: 15
                                        }}>
                                            <Image
                                                style={{ width: 320, height: 190, borderTopLeftRadius: 5, borderTopRightRadius: 5  }}
                                                source={require('../assets/coding.png')}
                                            />
                                            <View style={{ marginTop: 6 }}>
                                                <Text style={{ color: '#000000', fontWeight: 600, fontSize: 15, width: 260 }}>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem </Text>
                                            </View>
                                            <View style={{
                                                marginTop: 10,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{ fontSize: 14, color: '#1A2980' }}>Tuesday 12 March 2022</Text>
                                                <LinearGradient
                                                    colors={['#1A2980', '#26D0CE']}
                                                    start={{ x: 0, y: 0 }}
                                                    end={{ x: 1, y: 0 }}
        
                                                    style={{
        
                                                        backgroundColor: 'red',
                                                        padding: 6,
                                                        borderRadius: 100,
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        height: 32,
                                                        width: 100,
        
        
        
                                                    }}>
                                                    <Text style={{ fontWeight: 500, color: '#FFFFFF', marginStart: 4 }}>Apply Now</Text>
        
                                                </LinearGradient>
                                            </View>
                                        </View>
        
        
                                    </View>
                                </View>
        
                            )
                        }}
                        horizontal={false}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EventsPage

const styles = StyleSheet.create({})