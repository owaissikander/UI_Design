import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import UpcomeEvents from '../components/UpcomeEvents'
import Courses from '../components/Courses'
const Dashboard = () => {
    return (
        <SafeAreaView>
            <Header isDash={true} />
            <ScrollView style={{ marginBottom: 70 }} showsVerticalScrollIndicator={false}>
                <View style={{
                    paddingHorizontal: 15,
                    marginTop: 20
                }} >
                    <Text style={{ fontWeight: 400, fontSize: 15, lineHeight: 20, color: "#000000" }}>Assalam U alikum</Text>

                    <Text style={{ fontWeight: 600, fontSize: 20, color: '#1A2980' }}>Owais Khan</Text>
                </View>
                <View
                    style={{
                        marginHorizontal: 15,
                        borderRadius: 5,

                        marginTop: 18,
                        backgroundColor: '#e8e3e3',
                        width: 330,
                        height: 140,

                    }}>
                    <View style={{}}>

                        <View style={{ paddingHorizontal: 25, paddingTop: 20 }}>
                            <Text style={{ fontWeight: 600, fontSize: 15, color: '#000000' }}>Programming Course</Text>
                            <Text style={{ color: '#848181', fontWeight: 400, fontSize: 12 }}>Php, Laravel, MySql</Text>

                        </View>
                        <View style={{ paddingHorizontal: 25, marginTop: 30, flexDirection: 'row', padding: 5 }}>
                            <Text>🧭</Text>
                            <Text style={{ fontWeight: 500, fontSize: 12, color: '#000000', marginStart: 6 }}>
                                Durations 3 months
                            </Text>
                        </View>
                    </View>

                </View>
                {/* For upcomoing event component past here */}
                <View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginTop: 10
                    }} >
                        <Text style={{
                            color: '#000000',
                            fontWeight: 600,
                            fontSize: 18

                        }}>Upcoming Events</Text>
                        <MaterialIcons name={'chevron-right'} size={25} color={'#000000'} />
                    </View>
                    <UpcomeEvents />
                </View>

                {/* courses componnet past here  */}

                <View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: 'space-between',
                        paddingHorizontal: 20,
                        marginTop: 10
                    }} >
                        <Text style={{
                            color: '#000000',
                            fontWeight: 600,
                            fontSize: 18

                        }}>Courses</Text>
                        <MaterialIcons name={'chevron-right'} size={25} color={'#000000'} />
                    </View>
                    <Courses />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})