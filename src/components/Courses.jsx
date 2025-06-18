import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Courses = () => {

    const screenWidth = Dimensions.get('window').width
  return (
    <View>
    
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={() => {
                        return (
                            <View
                                style={{
                                    width: 310,
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
                                            style={{ width: 290, height: 180, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                            source={require('../assets/coding1.png')}
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
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
  )
}

export default Courses