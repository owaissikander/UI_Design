import { View, Text, FlatList, Dimensions, Image, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function CarouselSlider() {

    const screenWidth = Dimensions.get('window').width
    const CaroselData = [
        {
            id: 1,
            title: 'Graphics Designing Course',
            duration: 'Duartions 2 months',
            img: require('../assets/Group167.png')
        },
        {
            id: 2,
            title: 'Web & App Course',
            duration: 'Duartions 12 months',
            img: require('../assets/Group167.png')
        },
        {
            id: 3,
            title: 'DAta Engineering Course',
            duration: 'Duartions 24 months',
            img: require('../assets/Group167.png')
        },

    ]


    return (
        <View>
            <FlatList
                data={CaroselData}
                renderItem={({ index, item }) => {
                    return (
                        <LinearGradient
                            colors={['#FFFFFF', '#F9F9F9', '#F2F2F2']}

                            style={{
                                width: screenWidth,
                                height: 180,
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                marginHorizontal: 10, // Left/right margins
                                marginVertical: 10,
                            }}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 600, color: "#000000", width: 180, }}>{item.title}</Text>
                                <Text style={{ fontSize: 13, fontWeight: 400, color: "#868686", marginTop: 4 }}>{item.duration}</Text>


                                <LinearGradient
                                    colors={['#1A2980', '#26D0CE']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}

                                    style={{
                                        marginTop: 26,
                                        backgroundColor: 'red',
                                        padding: 8,
                                        borderRadius: 100,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        height: 35,
                                        width: 120,



                                    }}>
                                    <Text style={{ fontWeight: 600, color: '#FFFFFF', marginStart: 4 }}>Apply Now</Text>
                                    <MaterialIcons name={'chevron-right'} size={20} color={'#FFFFFF'} />
                                </LinearGradient>
                            </View>
                            <View style={{ justifyContent: 'center' }}>

                                <Image
                                    style={{
                                        height: 104,
                                        width: 90
                                    }}
                                    source={require('../assets/Group167.png')}
                                />
                            </View>
                        </LinearGradient>
                    )
                }}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            />
        </View >
    );
}
