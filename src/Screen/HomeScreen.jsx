
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CarouselSlider from '../components/Carousel'
import UpcomeEvents from '../components/UpcomeEvents'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Courses from '../components/Courses'

const HomeScreen = () => {
  return (
    <SafeAreaView>

      <ScrollView>
        <Header isSMIT={true} />
        <CarouselSlider />
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

      </ScrollView>
    </SafeAreaView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({})