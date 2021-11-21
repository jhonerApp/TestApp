import React, { useState, useEffect } from 'react'
import { Text, View, Flex, Button, Heading, Divider, Stack, ScrollView, IconButton, Icon, Avatar, VStack } from 'native-base'


import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import BaseProvider from '../components/BaseProvider'


import completeIcon from '../../assets/iconTracker/icons8-checked-30.png'
import MapViewDirections from 'react-native-maps-directions';

import MapView, { Marker, Polyline, Polygon } from 'react-native-maps';
import pointerIcon from '../../assets/iconTracker/icons8-pointer-64.png'


export const mapStyle = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dedede',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#333333',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];

function HomeScreen(props) {


  // if (Platform.OS === "web") {
  //   Image.resolveAssetSource = source => { uri: source }
  // } else {
    
  // }


  // const pointerUri = Image.resolveAssetSource(pointerIcon).uri
  // const [zoom, setZoom] = useState(10)


  return (
    <BaseProvider>
      <View style={{ flex: 1, position: 'relative', flexDirection: 'column-reverse' }}>
        <View>
          <MapView
            customMapStyle={mapStyle}
            style={{
              height: '100%'
            }}
            region={{
              latitude: 14.477276,
              longitude: 120.896917,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            loadingEnabled={false}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsBuildings={true}
            minZoomLevel={16}
            maxZoomLevel={50}
            onRegionChangeComplete={region => {
              setZoom(Math.round(Math.log(360 / region.latitudeDelta) / Math.LN2))
            }}
          >


            {/* <Marker
              coordinate={{ latitude: 14.479483, longitude: 120.89793 }}
              image={pointerIcon} style={{ width: 20, height: 20 }}
            />

            <Marker
              coordinate={{ latitude: 14.48389, longitude: 120.897617 }}
              image={pointerIcon} style={{ width: 20, height: 20 }}
            /> */}

            <MapViewDirections
              origin={{ latitude: 14.479483, longitude: 120.89793 }}
              destination={{ latitude: 14.48389, longitude: 120.897617}}
              apikey='AIzaSyAVki_4QwmGV2-LdlLuEvJgs2isArDNkVY'
              strokeWidth={4}
              strokeColor="#111111"
            />
          </MapView>

        </View>

        <View style={{ flex: 1, justifyContent: 'flex-end', position: 'absolute', width: '100%', alignItems: 'center' }}>
          <View style={{ paddingBottom: 80 }}>
            <View style={{
              flex: 1,
              paddingRight: 10,
              paddingLeft: 10,


            }}>
              <Flex
                bg="blueGray.50"
                shadow={3}
                rounded='md'
              >

                <View
                  style={{
                    flexDirection: 'column',
                    margin: 10,
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontFamily: 'Montserrat-Black' }}>
                    FOR DELIVERY TODAY
                  </Text>
                </View>

                <Divider />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, paddingTop: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Avatar
                      bg="amber.500"
                      size='12'
                      source={completeIcon}
                    >
                      AK
                    </Avatar>
                    <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                      <Text style={{ fontFamily: 'Montserrat-Bold' }}>Requested by</Text>
                      <Text style={{ fontFamily: 'Montserrat-Light' }}>Jhonnel Remolin</Text>
                    </View>
                  </View>
                  <Stack style={{ flexDirection: 'row' }}>
                    <View style={{ paddingLeft: 3 }}>
                      <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryStatusScreen', props.navigate)}
                        style={{ backgroundColor: '#148F77', borderRadius: 40, width: 45, height: 45, paddingHorizontal: 10, paddingTop: 10 }}>
                        <Ionicons
                          name="call"
                          size={24}
                          color="#FDFEFE"
                          style={{ width: 50 }}

                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 3 }}>
                      <TouchableOpacity onPress={() => props.navigation.navigate('DeliveryStatusScreen', props.navigate)}
                        style={{ backgroundColor: '#2980B9', borderRadius: 40, width: 45, height: 45, paddingHorizontal: 10, paddingTop: 10 }}>
                        <AntDesign
                          name="edit"
                          size={24}
                          color="#FDFEFE"
                          style={{ width: 50 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </Stack>

                </View>
                <Divider />
                <View
                  style={{
                    flexDirection: 'column',
                    margin: 8
                  }}
                >
                  <Text style={{ fontFamily: 'Montserrat-Regular' }}>
                    <Text style={{ fontFamily: 'Montserrat-Bold' }}>PICK UP LOCATION:</Text> 23 F E jacinto St west
                    rembo makati city,philippine 1215 District 2 zdfdfsfs
                    sdfsdfsdf sfdsfsdfsdf
                  </Text>
                </View>

              </Flex>
            </View>
          </View>
        </View>



      </View>
    </BaseProvider>
  )
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%'
  }
})
export default HomeScreen
