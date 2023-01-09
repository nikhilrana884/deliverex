import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
  }, [])


  return (
    <SafeAreaView>
      <Text>
        <View>
          <Image 
          source = {{
            uri: 'link ',
          }}
          className = "h-6 w-6 bg-white-200 p-3"
          />
        </View>
        <View>
          <Text>
            Deliver Now 
          </Text>
          <Text>
            Current Location
          </Text>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen